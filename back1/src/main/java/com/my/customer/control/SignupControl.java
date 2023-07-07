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
		response.setContentType("application/json;charset=utf-8"); //응답형식 : 표준MIME방식 //"text/html;charset=utf-8"
		PrintWriter out = response.getWriter();


		String id = request.getParameter("id");
		if(id.equals("admin")){
//			out.print("0, ");
//			out.print("이미 존재하는 아이디입니다");
			out.print("{\"status\" : 0, \"msg\" : \"이미 존재하는 아이디입니다.\"}");
		}else {
			out.print("{\"status\" : 1, \"msg\" : \"가입성공\"}");
			// JSON 문자열 형태로 응답하기
		}
	}
}
