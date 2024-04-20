package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import java.io.*;
import java.text.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.thinking.machines.hr.dl.*;
public class EmployeeDeleteConfirmation extends HttpServlet
{
public void doPost(HttpServletRequest request, HttpServletResponse response)
{
try
{
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
}catch(Exception exception)
{

}
}

public void doGet(HttpServletRequest request, HttpServletResponse response)
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

String employeeId=request.getParameter("employeeId");
EmployeeDAO employeeDAO=new EmployeeDAO();

try
{
EmployeeDTO emp=employeeDAO.getByEmployeeId(employeeId);
r.success=true;
r.result=emp;
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

}
}



}
}