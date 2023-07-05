package com.my.customer.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/signup")
public class SignupControl extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		response.setHeader("Access-Control-Allow-Origin","*");
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		
		String id = request.getParameter("id");
		out.print(id + "가입성공");
	}

}
