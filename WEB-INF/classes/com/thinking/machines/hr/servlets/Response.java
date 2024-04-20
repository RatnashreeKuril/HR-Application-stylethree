package com.thinking.machines.hr.servlets;
import java.util.*;
public class Response implements java.io.Serializable
{
public boolean success;
public Object result;
public List<String> error;
}