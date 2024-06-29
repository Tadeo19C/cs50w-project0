// src/components/DietTypes.js
import React from 'react';

const DietTypes = () => {
  return (
    <div className="container">
        <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div class="container">
                <h1 class="display-3 mb-3 animated slideInDown">Features</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                        <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                        <li class="breadcrumb-item text-dark active" aria-current="page">Features</li>
                    </ol>
                </nav>
            </div>
        </div>
        

        
        <div class="container-fluid bg-light bg-icon py-6">
            <div class="container">
                <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                    <h1 class="display-5 mb-3">Our Features</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="bg-white text-center h-100 p-4 p-xl-5">
                            <img class="img-fluid mb-4" src="img/icon-1.png" alt=""/>
                            <h4 class="mb-3">Natural Process</h4>
                            <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="bg-white text-center h-100 p-4 p-xl-5">
                            <img class="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                            <h4 class="mb-3">Organic Products</h4>
                            <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="bg-white text-center h-100 p-4 p-xl-5">
                            <img class="img-fluid mb-4" src="img/icon-3.png" alt=""/>
                            <h4 class="mb-3">Biologically Safe</h4>
                            <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                            <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default DietTypes;
