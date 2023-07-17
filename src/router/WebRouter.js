import React from 'react'
import {Routes, Route } from "react-router-dom";
import {ClienteLayout} from "../layouts"
import {Home, Contact,Course,Blog,Post} from "../pages/web"

export function WebRouter() {
  const loadLayout = (Layouts,Page) => {
    return (
      <Layouts>
        <Page/>
      </Layouts>
    );
  };
  
  return (
    <Routes>
        <Route path="/" element={loadLayout(ClienteLayout, Home)}/>
        <Route path="/contact" element={loadLayout(ClienteLayout, Contact)}/>
        <Route path="/courses" element={loadLayout(ClienteLayout, Course)}/>
        <Route path="/blog" element={loadLayout(ClienteLayout, Blog)}/>
        <Route path="/blog/:path" element={loadLayout(ClienteLayout, Post)}/>
    </Routes>
  );
}
