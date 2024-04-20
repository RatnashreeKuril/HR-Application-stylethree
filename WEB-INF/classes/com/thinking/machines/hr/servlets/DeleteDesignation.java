package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.thinking.machines.hr.dl.*;
public class DeleteDesignation extends HttpServlet
{
public void doGet(HttpServletRequest request, HttpServletResponse response)
{

try
{
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
}catch(Exception exception)
{
// do nothing
}
}
public void doPost(HttpServletRequest request, HttpServletResponse response)
{
try
{
Response r=new Response();
PrintWriter pw=response.getWriter();
response.setContentType("application/json");
response.setCharacterEncoding("utf-8");
Gson gson=new Gson();

HttpSession session=request.getSession();
String username=(String)session.getAttribute("username");
RequestDispatcher requestDispatcher;
if(username==null)
{
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

DesignationDTO designation=gson.fromJson(rawData,DesignationDTO.class);
DesignationDAO designationDAO=new DesignationDAO();
int code=designation.getCode();
try
{
DesignationDTO d=designationDAO.getDesignationByCode(code);
}catch(DAOException daoException)
{
r.success=false;
r.result=null;
r.error=null;
pw.print(gson.toJson(r));
pw.flush();
return;
}


try
{
designationDAO.deleteByCode(code);
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

}
}

}
}