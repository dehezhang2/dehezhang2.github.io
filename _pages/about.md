---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

My name is Deheng Zhang, I am currently Researcher at the [INSAIT](https://insait.ai/) supervised by [Prof. Luc Van Gool](https://insait.ai/prof-luc-van-gool/) and [Dr. Danda Paudel](https://insait.ai/dr-danda-paudel/). Previously, I finished my MSc at [ETH Zürich](https://ethz.ch/de.html) where I worked on 3D Vision/Graphics research projects in [Disney Research (Studio) Zürich](https://studios.disneyresearch.com/) overseen by [Prof. Dr. Markus Gross](https://inf.ethz.ch/de/personen/person-detail.mgross.html) and [VLG](https://vlg.inf.ethz.ch/index.html) overseen by [Prof. Dr. Siyu Tang](https://vlg.inf.ethz.ch/team/Prof-Dr-Siyu-Tang.html). Before that, I finished Bachelor's degree at [CityU of Hong Kong](https://www.cityu.edu.hk/). 

My current research interest is an intersection between computer vision and computer graphics, and I would like to explore more possibilities to combine deep learning with traditional rendering or 3D vision algorithms.


My hobbies include [Rendering](https://dehezhang2.github.io/Kombu/), [Photography](https://dehezhang2.github.io/gallery/), Video Game, Finger-style guitar, Table Tennis, Skiing, and Hiking.

## News
- *2026.01*:  🎉🎉 My first-author paper *EgoNight: Towards Egocentric Vision Understanding at Night with a Challenging Benchmark* has been accepted by **ICLR 2026**!
- *2025.09*:  🎉🎉 Our paper *StateSpaceDiffuser: Bringing Long Context to Diffusion World Models* has been accepted by **NeuraIPS 2025**!
- *2025.04*:  I have joined INSAIT as a Doctoral Researcher, supervised by [Prof. Luc Van Gool](https://insait.ai/prof-luc-van-gool/) and [Dr. Danda Paudel](https://insait.ai/dr-danda-paudel/)!
- *2024.10*:  🎉🎉 My first-author paper *RISE-SDF: a Relightable Information-Shared Signed Distance Field for Glossy Object Inverse Rendering* has been accepted by **3DV 2025**!
- *2023.10*:  🎉🎉 My first first-author paper *CoARF: Controllable 3D Artistic Style Transfer for Radiance Fields* has been accepted by **3DV 2024**!
  
## Education
- *<font size=3>2025 - Present</font>*<font size=3>, Researcher, INSAIT, Sofia, Bulgaria.</font> 
- *<font size=3>2021 - 2024</font>*<font size=3>, Master of Science, Computer Science, ETH Zürich, Switzerland.</font> 
- *<font size=3>2017 - 2021</font>*<font size=3>, Bachelor of Science with First Class Honours, Computer Science (AI Stream), City University of Hong Kong, Hong Kong SAR. </font>
- *<font size=3>2014-2017</font>*<font size=3>, Senior High School Diploma, Shandong Experimental High School, China. </font>

## Publications
<heading><strong>EgoNight: Towards Egocentric Vision Understanding at Night with a Challenging Benchmark</strong> </heading>
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
  <tr onmouseout="egonight_stop()" onmouseover="egonight_start()"> 

    <td width="40%">
      <div class="one">
      <div class="two" id = 'egonight_shape'>
        <img src="/images/projects/egonight.gif" width="100%" > </div>
      <img src='/images/projects/egonight.png' width="100%" >
      </div>
      
      <script type="text/javascript">
      function egonight_start() { 
      document.getElementById('egonight_shape').style.opacity = "1";
      }
      function egonight_stop() { 
      document.getElementById('egonight_shape').style.opacity = "0"; 
      }
      egonight_stop()
      </script>
    </td>
    
    <td valign="top" width="75%">
          <papertitle>
          <strong>
            EgoNight: Towards Egocentric Vision Understanding at Night with a Challenging Benchmark
          </strong>
          </papertitle>
    <br>
        
        <strong>Deheng Zhang*</strong>,
        <a href="https://yuqianfu.com/">Yuqian Fu*</a>,
        <a href="https://runyiyang.github.io/">Runyi Yang</a>,
        <a href="https://y9miao.github.io/">Yang Miao</a>,
        <a href="https://qiantianwen.github.io/">Tianwen Qian</a>,
        <a href="https://zhengxujosh.github.io/">Xu Zheng</a>,
        <a href="https://guoleisun.github.io/">Guolei Sun</a>,
        <a href="https://ajadchhatkuli.github.io/">Ajad Chhatkuli</a>,
        <a href="https://xuanjing-huang.github.io/">Xuanjing Huang</a>,
        <a href="https://fvl.fudan.edu.cn/people/yugangjiang/">Yu-Gang Jiang</a>,
        <a href="https://insait.ai/prof-luc-van-gool/">Luc Van Gool</a>,
        <a href="https://insait.ai/dr-danda-paudel/">Danda Pani Paudel</a>
        
      <br>
        <em>ICLR 2026</em>
      <br>
        <a href="https://openreview.net/pdf?id=DKD4QbOKBN"> Paper </a>
      <br>
       EgoNight is the first comprehensive benchmark designed to evaluate egocentric vision understanding in low-light and nighttime conditions—a critical gap in current research. The suite features a diverse dataset comprising synthetic scenes (EgoNight-Synthetic), real-world aligned day-night pairs (EgoNight-Sofia), and unaligned nighttime footage (EgoNight-Oxford). 
    </td>
  </tr>
</table>
<hr>

<heading><strong>StateSpaceDiffuser: Bringing Long Context to Diffusion World Models</strong> </heading>
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
  <tr onmouseout="statespacediffuser_stop()" onmouseover="statespacediffuser_start()"> 

    <td width="40%">
      <div class="one">
      <div class="two" id = 'statespacediffuser_shape'>
        <img src="/images/projects/statespacediffuser.gif" width="100%" > </div>
      <img src='/images/projects/statespacediffuser.png' width="100%" >
      </div>
      
      <script type="text/javascript">
      function statespacediffuser_start() { 
      document.getElementById('statespacediffuser_shape').style.opacity = "1";
      }
      function statespacediffuser_stop() { 
      document.getElementById('statespacediffuser_shape').style.opacity = "0"; 
      }
      statespacediffuser_stop()
      </script>
    </td>
    
    <td valign="top" width="75%">
          <papertitle>
          <strong>
            StateSpaceDiffuser: Bringing Long Context to Diffusion World Models
          </strong>
          </papertitle>
    <br>
        
        <a href="https://insait.ai/nedko-savov/">Nedko Savov</a>,
        <a href="https://insait.ai/naser-kazemi/">Naser Kazemi</a>,
        <strong>Deheng Zhang</strong>,
        <a href="https://insait.ai/dr-danda-paudel/">Danda Paudel</a>,
        <a href="https://xiwang1212.github.io/homepage/">Xi Wang</a>,
        <a href="https://insait.ai/prof-luc-van-gool/">Luc Van Gool</a>
      <br>
        <em>NeurIPS 2025</em>
      <br>
        <a href="https://arxiv.org/abs/2505.22246"> Paper </a> |
        <a href="https://insait-institute.github.io/StateSpaceDiffuser/">Project website</a>
      <br>
       In this paper, we introduce StateSpaceDiffuser to solve the memory issue of world model, where a diffusion model is enabled to perform long-context tasks by integrating features from a state-space model, representing the entire interaction history.
    </td>
  </tr>
</table>
<hr>

<heading><strong>RISE-SDF: a Relightable Information-Shared Signed Distance Field for Glossy Object Inverse Rendering</strong> </heading>
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
  <tr onmouseout="risesdf_stop()" onmouseover="risesdf_start()"> 

    <td width="40%">
      <div class="one">
      <div class="two" id = 'risesdf_shape'>
        <img src="/images/projects/risesdf.gif" width="100%" > </div>
      <img src='/images/projects/risesdf.png' width="100%" >
      </div>
      
      <script type="text/javascript">
      function risesdf_start() { 
      document.getElementById('risesdf_shape').style.opacity = "1";
      }
      function risesdf_stop() { 
      document.getElementById('risesdf_shape').style.opacity = "0"; 
      }
      risesdf_stop()
      </script>
    </td>
    
    <td valign="top" width="75%">
          <papertitle>
          <strong>
            RISE-SDF: a Relightable Information-Shared Signed Distance Field for Glossy Object Inverse Rendering
          </strong>
          </papertitle>
    <br>
        <strong>Deheng Zhang*</strong>,
        <a href="https://github.com/ccetaw">Jingyu Wang*</a>,
        <a href="https://taconite.github.io/">Shaofei Wang</a>,
        <a href="https://markomih.github.io/">Marko Mihajlovic</a>,
        <a href="https://vlg.inf.ethz.ch/team/Dr-Sergey-Prokudin.html">Sergey Prokudin</a>,
        <a href="https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/computergrafik/lehrstuhl/mitarbeiter/prof-dr-ing-hendrik-lensch/">Hendrik P.A. Lensch</a>,
        <a href="https://vlg.inf.ethz.ch/team/Prof-Dr-Siyu-Tang.html">Siyu Tang</a>

      <br>
        <em>3DV 2025</em>
      <br>
        <a href="https://www.arxiv.org/pdf/2409.20140"> Paper </a> |
        <a href="https://dehezhang2.github.io/RISE-SDF/">Project website</a> |
        <a href="https://drive.google.com/drive/folders/1991eNN5-bMWK7aEHf99VU_iGZsH6FnAc">Dataset</a>
      <br>
       In this paper, we propose a novel end-to-end relightable neural inverse rendering system that achieves high-quality reconstruction of geometry and material properties, thus enabling high-quality relighting. The cornerstone of our method is a two-stage approach for learning a better factorization of scene parameters.
    </td>
  </tr>
</table>
<hr>

<heading><strong>CoARF: Controllable 3D Artistic Style Transfer for Radiance Fields</strong> </heading>
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
  <tr onmouseout="coarf_stop()" onmouseover="coarf_start()"> 

    <td width="40%">
      <div class="one">
      <div class="two" id = 'coarf_shape'>
        <img src="/images/projects/coarf.gif" width="100%" > </div>
      <img src='/images/projects/coarf.png' width="100%" >
      </div>
      
      <script type="text/javascript">
      function coarf_start() { 
      document.getElementById('coarf_shape').style.opacity = "1";
      }
      function coarf_stop() { 
      document.getElementById('coarf_shape').style.opacity = "0"; 
      }
      coarf_stop()
      </script>
    </td>
    
    <td valign="top" width="75%">
          <papertitle>
          <strong>
            CoARF: Controllable 3D Artistic Style Transfer for Radiance Fields
          </strong>
          </papertitle>
    <br>
        <strong>Deheng Zhang</strong>,
        <a href="https://cfernandezlab.github.io/">Clara Fernández Labrador</a>,
        <a href="https://studios.disneyresearch.com/people/christopher-schroers/"> Christopher Schroers</a>,
      <br>
        <em>3DV 2024</em>
      <br>
        <a href="https://studios.disneyresearch.com/app/uploads/2024/03/CoARF_paper.pdf"> Paper </a> |
        <a href="https://studios.disneyresearch.com/2024/03/18/coarf-controllable-3d-artistic-style-transfer-for-radiance-fields/">Project website</a> 
      <br>
       In this paper, we introduce Controllable Artistic Radiance Fields (CoARF), a novel algorithm for controllable 3D scene stylization. CoARF enables style transfer for specified objects, compositional 3D style transfer and semantic-aware style transfer. We achieve controllability using segmentation masks with different label-dependent loss functions. We also propose a semantic-aware nearest neighbor matching algorithm to improve the style transfer quality.
    </td>
  </tr>
</table>
<hr>


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
      point_stop()
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
        <a href="https://arxiv.org/abs/2310.03375"> Paper </a> |
        <a href="https://dehezhang2.github.io/Point_Based_NeRF_Editing/">Project website</a> | 
        <a href="https://github.com/dehezhang2/Point_Based_NeRF_Editing/tree/main">Github Repo</a> 
      <br>
      In this project, we proposed a new method for learning an animable human avatar model with point-based primitives. Specifically, our method exploits the explicit point cloud to train the static 3D scene based on Point-NeRF and apply the deformation by encoding the point cloud translation using a deformation MLP. We also guarantee rendering consistency by performing rotation-only ray-bending. The final <a href="https://www.youtube.com/watch?v=3iZ_89IwZUU">animating avatar</a> is comparable to other state-of-the-art animable human models.
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
