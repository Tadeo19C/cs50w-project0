// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
        <head/>
            <meta charset="utf-8"/>
            <title>Dunder Miflin Alimentation Company</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta content="" name="keywords"/>
            <meta content="" name="description"/>

            <link href="{{ url_for('static', filename='img/favicon.ico') }}" rel="icon"/>

        
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Lora:wght@600;700&display=swap" rel="stylesheet"/> 

        
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

        
            <link href="{{ url_for('static', filename='lib/animate/animate.min.css') }}" rel="stylesheet"/>
            <link href="{{ url_for('static', filename='lib/owlcarousel/assets/owl.carousel.min.css') }}" rel="stylesheet"/>

        
            <link href="{{ url_for('static', filename='css/bootstrap.min.css') }}" rel="stylesheet">

        
            <link href="{{ url_for('static', filename='css/style.css') }}" rel="stylesheet">
        
        </head>

        <body>
        
            <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div class="col-lg-6 px-5 text-start">
                        <small><i class="fa fa-map-marker-alt me-2"></i>Managua, Nicaragua</small>
                        <small class="ms-4"><i class="fa fa-envelope me-2"></i>info@example.com</small>
                    </div>
                    <div class="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <a class="text-body ms-3" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="text-body ms-3" href=""><i class="fab fa-twitter"></i></a>
                        <a class="text-body ms-3" href=""><i class="fab fa-linkedin-in"></i></a>
                        <a class="text-body ms-3" href=""><i class="fab fa-instagram"></i></a>
                    </div>
            </div>

                <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="{{ url_for('home') }}" class="navbar-brand ms-4 ms-lg-0">
                        <img src="{{ url_for('static', filename='img/logo.png') }}" class="logo"/>
                    </a>
                    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                            <a href="{{ url_for('home') }}" class="nav-item nav-link active">Home</a>
                            <a href="{{ url_for('about') }}" class="nav-item nav-link">About Us</a>
                            <a href="{{ url_for('services') }}" class="nav-item nav-link">Services</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Diet Plan</a>
                                <div class="dropdown-menu m-0">
                                    <a href="{{ url_for('diet_types') }}" class="dropdown-item">Tipos de dietas</a>
                                    <a href="{{ url_for('simple_diet') }}" class="dropdown-item">Dietas simple</a>
                                    <a href="{{ url_for('fitness_diet') }}" class="dropdown-item">Dieta Fitness</a>
                                    <a href="{{ url_for('404') }}" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="{{ url_for('contact') }}" class="nav-item nav-link">Contact Us</a>
                        </div>
                        <div class="d-none d-lg-flex ms-2">
                            <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small class="fa fa-search text-body"></small>
                            </a>
                            <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small class="fa fa-user text-body"></small>
                            </a>
                            <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small class="fa fa-shopping-bag text-body"></small>
                            </a>
                        </div>
                    </div>
                </nav>
        </div>
        

            <footer>
                <div class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container py-5">
                        <div class="row g-5">
                            <div class="col-lg-3 col-md-6">
                                <h1 class="fw-bold text-primary mb-4">F<span class="text-secondary">oo</span>dy</h1>
                                <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                                <div class="d-flex pt-2">
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h4 class="text-light mb-4">Address</h4>
                                <p><i class="fa fa-map-marker-alt me-3"></i>Managua, Nicaragua</p>
                                <p><i class="fa fa-phone-alt me-3"></i>+505 77019829</p>
                                <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h4 class="text-light mb-4">Quick Links</h4>
                                <a class="btn btn-link" href="">About Us</a>
                                <a class="btn btn-link" href="">Contact Us</a>
                                <a class="btn btn-link" href="">Our Services</a>
                                <a class="btn btn-link" href="">Terms & Condition</a>
                                <a class="btn btn-link" href="">Support</a>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h4 class="text-light mb-4">Newsletter</h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div class="position-relative mx-auto" style="max-width: 400px;">
                                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                
                                    Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        
            <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

            
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="{{ url_for('static', filename='lib/wow/wow.min.js') }}"></script>
            <script src="{{ url_for('static', filename='lib/easing/easing.min.js') }}"></script>
            <script src="{{ url_for('static', filename='lib/waypoints/waypoints.min.js') }}"></script>
            <script src="{{ url_for('static', filename='lib/owlcarousel/owl.carousel.min.js') }}"></script>
            <script src="{{ url_for('static', filename='lib/counterup/counterup.min.js') }}"></script>
            <script src="{{ url_for('static', filename='lib/parallax/parallax.min.js') }}"></script>

            
            <script src="{{ url_for('static', filename='js/main.js') }}"></script>
        
        </body>
    </html>
  );
};

export default Layout;
