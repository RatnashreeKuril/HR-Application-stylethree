package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.thinking.machines.hr.dl.*;
public class AddEmployee extends HttpServlet
{
public void doGet(HttpServletRequest request, HttpServletResponse response)
{
try
{
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
}catch(Exception exception)
{

}
}

public void doPost(HttpServletRequest request, HttpServletResponse response)
{
try
{
PrintWriter pw=response.getWriter();
response.setContentType("application/json");
response.setCharacterEncoding("utf-8");
Gson gson=new Gson();
Response r=new Response();
BufferedReader bufferedReader=request.getReader();
StringBuffer stringBuffer=new StringBuffer();
String s;
while(true)
{
s=bufferedReader.readLine();
if(s==null) break;
stringBuffer.append(s);
}
String rawData=stringBuffer.toString();
EmployeeDTO employee=gson.fromJson(rawData,EmployeeDTO.class);
int designationCode=employee.getDesignationCode();
DesignationDTO designation=null;
try
{
designation=new DesignationDAO().getDesignationByCode(designationCode);
}catch(DAOException daoException)
{
r.success=false;
r.result=null;
r.error=new ArrayList<>();
r.error.add(daoException.getMessage());
pw.print(gson.toJson(r));
pw.flush();
return;
}
employee.setDesignation(designation.getTitle());
EmployeeDAO employeeDAO=new EmployeeDAO();
String panNumber=employee.getPANNumber();
String aadharCardNumber=employee.getAadharCardNumber();
boolean panNumberExists;
boolean aadharCardNumberExists;
EmployeeDTO e;
try
{
e=employeeDAO.getByPANNumber(panNumber);
panNumberExists=true;
}catch(DAOException daoException)
{
panNumberExists=false;
}
try
{
e=employeeDAO.getByAadharCardNumber(aadharCardNumber);
aadharCardNumberExists=true;
}catch(DAOException daoException)
{
aadharCardNumberExists=false;
}
if(panNumberExists || aadharCardNumberExists)
{
r.success=false;
r.result=null;
r.error=new ArrayList<>();
if(panNumberExists) r.error.add("PAN number exists");
if(aadharCardNumberExists) r.error.add("Aadhar card number exists");
pw.print(gson.toJson(r));
pw.flush();
return;
}

try
{
employeeDAO.add(employee);
r.success=true;
r.result=employee.getEmployeeId();
r.error=null;
pw.print(gson.toJson(r));
pw.flush();
}catch(DAOException daoException)
{
r.success=false;
r.result=null;
r.error=new ArrayList<>();
r.error.add(daoException.getMessage());
pw.print(gson.toJson(r));
pw.flush();
}
}catch(Exception exception)
{
System.out.println(exception);
try
{
response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
}catch(Exception e)
{
// do nothing
}
}

}

}