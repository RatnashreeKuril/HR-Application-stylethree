package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.thinking.machines.hr.dl.*;
public class DeleteEmployee extends HttpServlet
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
EmployeeDTO emp=gson.fromJson(rawData,EmployeeDTO.class);
String employeeId=emp.getEmployeeId();
EmployeeDAO employeeDAO=new EmployeeDAO();
try
{
EmployeeDTO employee=employeeDAO.getByEmployeeId(employeeId);
employeeDAO.deleteByEmployeeId(employeeId);
r.success=true;
r.result=null;
r.error=null;
pw.print(gson.toJson(r));
pw.flush();
}catch(DAOException daoException)
{
r.success=false;
r.result=null;
r.error=null;
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