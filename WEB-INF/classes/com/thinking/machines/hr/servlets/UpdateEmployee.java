package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.thinking.machines.hr.dl.*;
public class UpdateEmployee extends HttpServlet
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
GsonBuilder gsonBuilder=new GsonBuilder().setDateFormat("yyyy-MM-dd");
Gson gson=gsonBuilder.create();
Response r=new Response();
HttpSession session=request.getSession();
String username=(String)session.getAttribute("username");
if(username==null)
{
RequestDispatcher requestDispatcher;
requestDispatcher=request.getRequestDispatcher("/LoginForm.jsp");
requestDispatcher.forward(request,response);
}

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
EmployeeDAO employeeDAO=new EmployeeDAO();
EmployeeDTO e;
try
{
e=employeeDAO.getByEmployeeId(employee.getEmployeeId());
}catch(DAOException daoException)
{
r.success=false;
r.result=null;
r.error=null;
pw.print(gson.toJson(r));
pw.flush();
}

int designationCode=employee.getDesignationCode();
DesignationDTO designation=null;
try
{
designation=new DesignationDAO().getDesignationByCode(designationCode);
}catch(DAOException exception)
{
r.success=false;
r.result=null;
r.error=null;
pw.print(gson.toJson(r));
pw.flush();
}

String panNumber=employee.getPANNumber();
String aadharCardNumber=employee.getAadharCardNumber();
boolean panNumberExists=false;
boolean aadharCardNumberExists=false;
String employeeId=employee.getEmployeeId();
try
{
e=employeeDAO.getByPANNumber(panNumber);
if(e.getEmployeeId().equalsIgnoreCase(employeeId)==false)
{
panNumberExists=true;
}
}catch(DAOException daoException)
{
panNumberExists=false;
}
try
{
e=employeeDAO.getByAadharCardNumber(aadharCardNumber);
if(e.getEmployeeId().equalsIgnoreCase(employeeId)==false)
{
aadharCardNumberExists=true;
}
}catch(DAOException daoException)
{
aadharCardNumberExists=false;
}
if(panNumberExists==true || aadharCardNumberExists==true)
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
employeeDAO.update(employee);
r.success=true;
r.result=null;
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