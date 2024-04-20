package com.thinking.machines.hr.servlets;
import com.google.gson.*;
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.thinking.machines.hr.dl.*;
public class AddDesignation extends HttpServlet
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
BufferedReader bufferedReader=request.getReader();
StringBuffer stringBuffer=new StringBuffer();
String s;
while(true)
{
s=bufferedReader.readLine();
if(s==null) break;
stringBuffer.append(s);
}
PrintWriter pw=response.getWriter();
response.setContentType("application/json");
response.setCharacterEncoding("utf-8");
String rawData=stringBuffer.toString();
Gson gson=new Gson();
DesignationDTO designation=gson.fromJson(rawData,DesignationDTO.class);
DesignationDAO designationDAO=new DesignationDAO();
Response r=new Response();
try
{
designationDAO.addDesignation(designation);
r.success=true;
r.result=designation.getCode();
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