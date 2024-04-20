package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import java.util.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.thinking.machines.hr.dl.*;
public class Login extends HttpServlet
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
AdministratorDTO administrator=gson.fromJson(rawData,AdministratorDTO.class);
AdministratorDAO administratorDAO=new AdministratorDAO();
String username=administrator.getUsername();
String password=administrator.getPassword();
try
{
AdministratorDTO a=administratorDAO.getByUsername(username);
if(password.equals(a.getPassword())==false)
{
r.success=false;
r.result=null;
r.error=new ArrayList<>();
r.error.add("Invalid username/password");
pw.print(gson.toJson(r));
pw.flush();
return;
}
HttpSession session=request.getSession();
session.setAttribute("username",username);
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
r.error.add("Invalid username/password");
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