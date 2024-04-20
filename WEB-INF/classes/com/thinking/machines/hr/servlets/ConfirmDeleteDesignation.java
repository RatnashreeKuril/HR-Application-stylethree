package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import com.thinking.machines.hr.dl.*;
public class ConfirmDeleteDesignation extends HttpServlet
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
Gson gson=new Gson();
Response r=new Response();
PrintWriter pw=response.getWriter();
response.setContentType("application/json");
response.setCharacterEncoding("utf-8");
HttpSession session=request.getSession();
String username=(String)session.getAttribute("username");
if(username==null)
{
RequestDispatcher requestDispatcher;
requestDispatcher=request.getRequestDispatcher("/LoginForm.jsp");
requestDispatcher.forward(request,response);
}

int code=0;
try
{
code=Integer.parseInt(request.getParameter("code"));
}catch(NumberFormatException nfe)
{

r.success=false;
r.result=null;
r.error=null;
pw.print(gson.toJson(r));
pw.flush();
return;
}

DesignationDAO designationDAO=new DesignationDAO();
try
{
DesignationDTO designation=designationDAO.getDesignationByCode(code);
r.success=true;
r.result=designation;
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
System.out.println("2222222222222222222");
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