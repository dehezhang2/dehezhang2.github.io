---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

My name is Deheng Zhang, I am currently an Msc CS student at [ETH Zürich](https://ethz.ch/de.html). I obtained my Bachelor's degree in [CityU of Hong Kong](https://www.cityu.edu.hk/), I was supervised by [Prof. Dr. Jing Liao](https://liaojing.github.io/html/) for my Bachelor's thesis. Now I am doing my master thesis in [VLG](https://vlg.inf.ethz.ch/index.html), supervised by [Dr. Sergey Prokudin](https://vlg.inf.ethz.ch/team/Dr-Sergey-Prokudin.html) and [Shaofei Wang](https://taconite.github.io/), overseen by [Prof. Dr. Siyu Tang](https://vlg.inf.ethz.ch/team/Prof-Dr-Siyu-Tang.html). Previously, I also work on my semester thesis in [Disney Research (Studio) Zürich](https://studios.disneyresearch.com/) about 3D style transfer, supervised by [Dr. Clara Fernández Labrador](https://cfernandezlab.github.io/). 

My current research interest is an intersection between computer vision and computer graphics, and I would like to explore more possibilities to combine deep learning with traditional rendering or 3D vision algorithms. 

My hobbies includes [Rendering](https://dehezhang2.github.io/Kombu/), [Photography](https://dehezhang2.github.io/gallery/), Video Game, Finger-style guitar, Table Tennis, Skiing, and Hiking.

## Education
- *<font size=3>2021 - Present</font>*<font size=3>, Master of Science, Computer Science, ETH Zürich, Switzerland.</font> 
- *<font size=3>2017 - 2021</font>*<font size=3>, Bachelor of Science with First Class Honours, Computer Science (AI Stream), City University of Hong Kong, Hong Kong SAR. </font>
- *<font size=3>2014-2017</font>*<font size=3>, Senior High School Diploma, Shandong Experimental High School, China. </font>

## Selected Projects

<html>
  <head>
  <meta name="google-site-verification" content="xDNWUvx6Q5EWK5YYSyKvK8DZTmvXhKsGX203Ll-BFFE" >	
  <meta name=viewport content="width=800" >
  <meta name="generator" content="HTML Tidy for Linux/x86 (vers 11 February 2007), see www.w3.org">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <style type="text/css">
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300);
  /* @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:100,300,400,500,700|Material+Icons); */
    /* Color scheme stolen from Sergey Karayev */
    .one
    {
    position: relative;
    }
    .two
    {
    position: absolute;
    transition: opacity .2s ease-in-out;
    -moz-transition: opacity .2s ease-in-out;
    -webkit-transition: opacity .2s ease-in-out;
    }
    .fade {
     transition: opacity .2s ease-in-out;
     -moz-transition: opacity .2s ease-in-out;
     -webkit-transition: opacity .2s ease-in-out;
    }
    span.highlight {
        background-color: #ffffd0;
    }
  </style>

<heading><strong>Point-Based Radiance Fields for Controllable Human Motion Synthesis</strong> </heading>
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
  <tr onmouseout="point_stop()" onmouseover="point_start()"> 

    <td width="40%">
      <div class="one">
      <div class="two" id = 'point_shape'>
        <img src="/images/projects/point.gif" width="100%" > </div>
      <img src='/images/projects/point.png' width="100%" >
      </div>
      
      <script type="text/javascript">
      function point_start() { 
      document.getElementById('point_shape').style.opacity = "1";
      }
      function point_stop() { 
      document.getElementById('point_shape').style.opacity = "0"; 
      }
      nice_stop()
      </script>
    </td>
    
    <td valign="top" width="75%">
          <papertitle>
          <strong>
            Point-Based Radiance Fields for Controllable Human Motion Synthesis
          </strong>
          </papertitle>
    <br>
        <strong>Deheng Zhang*</strong>,
        <a href="https://sputnik524.github.io/">Haitao Yu*</a>,
        <a href="https://github.com/xpy1009"> Peiyuan Xie*</a>,
        <a href="https://github.com/TianyiZhang-arc"> Tianyi Zhang*</a>
        (* means equal contribution)
      <br>
        <em>Course project of Digital Human in ETH Zürich</em>
      <br>
        <!-- <a href="https://arxiv.org/abs/2306.02393"> Paper </a> |  -->
        <a href="https://github.com/dehezhang2/Point_Based_NeRF_Editing/tree/main">Github Repo</a> 
        <a href="https://dehezhang2.github.io/Point_Based_NeRF_Editing/">Project website</a>
      <br>
      In this project, we proposed a new method for learning animatable human avatar model with point-based primitives. In specific, our method exploits the explicit point cloud to train the static 3D scene based on Point-NeRF and apply the deformation by encoding the point cloud translation using a deformation MLP. We also guarantee the rendering consistency by perform rotation-only ray-bending. The final <a href="https://www.youtube.com/watch?v=3iZ_89IwZUU">animating avatar</a> is comparable to other state-of-art animatable human models.
    </td>
  </tr>
</table>
<hr>

<heading><strong>NICE-SLAM with Adaptive Feature Grids</strong> </heading>
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
  <tr onmouseout="nice_stop()" onmouseover="nice_start()"> 

    <td width="40%">
      <div class="one">
      <div class="two" id = 'nice_shape'>
        <img src="/images/projects/niceslam.gif" width="100%" > </div>
      <img src='/images/projects/niceslam.png' width="100%" >
      </div>
      
      <script type="text/javascript">
      function nice_start() { 
      document.getElementById('nice_shape').style.opacity = "1";
      }
      function nice_stop() { 
      document.getElementById('nice_shape').style.opacity = "0"; 
      }
      nice_stop()
      </script>
    </td>
    
    <td valign="top" width="75%">
          <papertitle>
          <strong>
            NICE-SLAM with Adaptive Feature Grids
          </strong>
          </papertitle>
    <br>
        <strong>Deheng Zhang*</strong>,
        <a href="https://ganlinzhang.xyz/">Ganlin Zhang*</a>,
        <a href="https://github.com/Caroline171840094"> Feichi Lu*</a>,
        <a href="https://github.com/AngieALAL"> Anqi Li</a>
        (* means equal contribution)
      <br>
        <em>Course project of 3D Vision 2022 in ETH Zürich</em>
      <br>
       <a href="https://drive.google.com/file/d/1QdLE10cik3sKheQqzCWpE0Q36Qt5X_02/view?usp=sharing">Paper</a> | <a href="https://github.com/zhangganlin/NICE-SLAM-with-Adaptive-Feature-Grids">Github Repo</a> <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhangganlin/NICE-SLAM-with-Adaptive-Feature-Grids?style=social">
      <br>
      In this project, we present a sparse version of NICE-SLAM, which is a SLAM system incorporating the idea of Voxel Hashing into <a href="https://pengsongyou.github.io/nice-slam"> NICE-SLAM</a> framework. Instead of initializing feature grids in the whole space, voxel features near the surface are adaptively added and optimized.
    </td>
  </tr>
</table>
<hr>

<heading><strong>Holo-Spot: Accessible Robot Control in Mixed Reality</strong> </heading>
  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">  
    <tr onmouseout="holo_stop()" onmouseover="holo_start()">  
            <td width="40%">
              <div class="one">
                <div class="two" id='holo_shape'>
                  <!-- <img src='/images/projects/holospot.gif' width="100%"> -->
                  <video  width="100%" muted autoplay loop>
                    <source src="/images/projects/holospot.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                  </div>
                  <img src='/images/projects/holospot.png' width="100%"/>
                </div>

              <script type="text/javascript">
              function holo_start() { 
              document.getElementById('holo_shape').style.opacity = "1";
              }
              function holo_stop() { 
              document.getElementById('holo_shape').style.opacity = "0"; 
              }
              holo_stop()
              </script>
            </td>
      <td valign="top" width="75%">
            <papertitle>
            <strong>
            <a href="https://zhangganlin.github.io/Holo-Spot-Page/index.html">Holo-Spot: Accessible Robot Control in Mixed Reality</a>
            </strong>
            </papertitle>
      <br>
          <strong>Deheng Zhang*</strong>,
          <a href="https://ganlinzhang.xyz/">Ganlin Zhang*</a>,
          <a href="https://github.com/DecAd3"> Longteng Duan*</a>,
          <a href="https://github.com/guo-han"> Guo Han*</a>
          (* means equal contribution)
        <br>
          <em>Course project of Mixed Realiy 2022 in ETH Zürich</em>
        <br>
        <a href="https://arxiv.org/abs/2306.02393"> Paper </a> | 
        <a href="https://github.com/dehezhang2/holo-spot">Github Repo </a> | 
        <a href="https://zhangganlin.github.io/Holo-Spot-Page/index.html">Project website</a>
        <br>
        In this project, we design, implement and deploy a mixed-reality-based method with HoloLens 2 that enables users to control the Boston Dynamics Spot robot.</td>
    </tr>
  </table>
  <hr>

  <heading><strong>Kombu: Physically-based Renderer based on Nori in C++11</strong> </heading>
  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">  
    <tr onmouseout="kombu_stop()" onmouseover="kombu_start()">  
            <td width="40%">
              <div class="one">
                <div class="two" id='kombu_shape'>
                  <img src='/images/projects/kombu.gif' width="100%"/>                 
                </div>
                  <img src='/images/projects/kombu.png' width="100%"/>
                </div>

              <script type="text/javascript">
              function kombu_start() { 
              document.getElementById('kombu_shape').style.opacity = "1";
              }
              function kombu_stop() { 
              document.getElementById('kombu_shape').style.opacity = "0"; 
              }
              kombu_stop()
              </script>
            </td>
      <td valign="top" width="75%">
            <papertitle>
            <strong>
            <a href="https://dehezhang2.github.io/Kombu/">Kombu: Physically-based Renderer based on Nori in C++11</a>
            </strong>
            </papertitle>
      <br>
          <strong>Deheng Zhang*</strong>,
          <a href="https://ganlinzhang.xyz/">Ganlin Zhang*</a>
          (* means equal contribution)
        <br>
          <em>Course project of Computer Graphics 2022 in ETH Zürich</em>
        <br>
        <a href="https://github.com/dehezhang2/Kombu">Github Repo </a> | 
        <a href="https://dehezhang2.github.io/Kombu/">Project website</a>
        <br>
        In this project, I implemented part of the Kombu physical-based renderer. The function implemented by me includes volumetric rendering with heterogeneous participating media (ray marching, delta/ratio tracking as the transmittance estimation method), bilateral filter denoising, directional light, and object instancing. Finally, we produced an image about Christmas on the Moon for the rendering competition.</td>
    </tr>
  </table>
  <hr>

  <heading><strong>SAVA: Style-Attention-Void-Aware Style Transfer</strong> </heading>
  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">  
    <tr onmouseout="sava_stop()" onmouseover="sava_start()">  
            <td width="40%">
              <div class="one">
                <div class="two" id='sava_shape'>
                  <img src='/images/projects/sava.gif' width="100%"/>                 
                </div>
                <img src='/images/projects/sava.png' width="100%" />
                </div>

              <script type="text/javascript">
              function sava_start() { 
              document.getElementById('sava_shape').style.opacity = "1";
              }
              function sava_stop() { 
              document.getElementById('sava_shape').style.opacity = "0"; 
              }
              sava_stop()
              </script>
            </td>
      <td valign="top" width="75%">
            <papertitle>
            <strong>
            SAVA: Style-Attention-Void-Aware Style Transfer
            </strong>
            </papertitle>
      <br>
          <strong>Deheng Zhang</strong>
        <br>
          <em>Bachelor Thesis in CityU HK</em>
        <br>
        <a href="https://drive.google.com/file/d/1WPLzilrnaok1gbAuR99BYJB5Mw7cl9kb/view?usp=sharing">Paper</a> | 
        <a href="https://github.com/dehezhang2/Style-Attention-Void-Aware-Style-Transfer">Github Repo </a>
        <br>
        In this project, I propose a novel self-attention mechanism with specific mathematical meaning and a novel style transfer mechanism to learn the blank-leaving information in the style image. I also implement the code for training and testing, with a web-based GUI.</td>
    </tr>
  </table>
  <hr>

<heading><strong>Optimization by Particle Swarm Using Surrogates via Bunch-Kaufman Pivoting and Standard Optimization</strong> </heading>
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">  
    <td width="30%">
      <div class="one">
      <img src="/images/projects/opus.png" width="100%"> </div>
    </td>
    <td valign="top" width="75%">
          <papertitle>
          <strong>
            Optimization by Particle Swarm Using Surrogates via Bunch-Kaufman Pivoting and Standard Optimization
          </strong>
          </papertitle>
    <br>
        <strong>Deheng Zhang*</strong>,
        <a href="https://ganlinzhang.xyz/">Ganlin Zhang*</a>,
        <a href="https://www.linkedin.com/in/junpeng-gao-04574917b/"> Junpeng Gao*</a>,
        <a href="https://www.linkedin.com/in/yu-hong-b06322178/"> Yu Hong*</a>
        (* means equal contribution)
      <br>
        <em>Course project of Advanced System Lab 2022 in ETH Zürich</em>
      <br>
      <a href="https://drive.google.com/file/d/1tOvzScM-wQVdeebcPxE3DDukX2AxPnN1/view?usp=sharing">Paper</a> | 
      <a href="https://github.com/zhangganlin/OPUS-via-Bunch-Kaufman-pivoting-and-standard-optimization">Github Repo</a>
      <br>
      Focus on speeding up black-box optimization algorithm OPUS from paper <a href="https://acl.inf.ethz.ch/teaching/fastcode/2022/project/project-ideas/particle-swarm.pdf">Particle Swarm with Radial Basis Function Surrogates for Expensive Black-box Optimization</a> by Rommel G. Regis. Besides, we implement the speed-up C++ version of Bunch-Kaufman Pivoting.
    </td>
</table>
<hr>

<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=080808&w=500&t=n&d=EaPM_Oi-daigqRQM2Q73XIO-D5fj9jjmJs-kLKLA8XI&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080'></script>
