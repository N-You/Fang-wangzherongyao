    window.onload = function(){
        // 头部隐藏窗口设置
        var h_img = document.getElementsByClassName("header_img")[0];
        var h_hidimg = document.getElementsByClassName("header_hidimg")[0];
        var header_hid = document.getElementsByClassName("header_hid")[0];
        var header_twobtn = document.getElementsByClassName("header_twobtn")[0];
        var bang = document.getElementsByClassName("bang"); 
        var banghid = document.getElementsByClassName("banghid"); 
        
        h_img.onmouseenter = function(){
            h_hidimg.style.display = "block"; 
        }
        h_hidimg.onmouseleave = function(){
            h_hidimg.style.display = "none"; 
        }
        header_twobtn.onmouseenter = function(){
            header_hid.style.display = "block"; 
        }
        header_hid.onmouseleave = function(){
            header_hid.style.display = "none"; 
        }
        for(var i=0;i<bang.length;i++){
            bang[i].index = i;    
              bang[i].onmouseenter = function(){
                var j = this.index;
                this.style.display = "none";
                banghid[j].style.display = "block";  
              }
        }
        for(var j=0;j<banghid.length;j++){
            banghid[j].index = j;
            banghid[j].onmouseleave = function(){
                var k = this.index;
                this.style.display = "none";
                bang[k].style.display = "block";  
              }
        }

        // 主体nav设计
        // 导航nav部分
        var nav = document.getElementsByTagName("nav")[0];
        var nav_hid = document.getElementsByClassName("nav_hid")[0];
        var nav_box = document.getElementsByClassName("nav_box")[0];
        // var jb_navul = document.getElementsByClassName("jb_navul")[0];
        // var ulArr = jb_navul.children;
        nav.onmouseenter = function(){
            nav_hid.style.display = "flex";
        }
        nav_box.onmouseleave = function(){
            nav_hid.style.display = "none";
        }
        // for(var i=0;i<ulArr.length;i++){
        //     ulArr[i].onmouseenter = function(){
        //         this.style.backgroundImage = "url(../images/index.png)";
        //         this.style.backgroundPosition = "0 0"
        //     }
        //     ulArr[i].onmouseleave = function(){
        //         this.style.background = "none";
        //     }
        // }

        // 广告小窗口
        var flex_divh = document.getElementsByClassName("flex_divh")[0];
        var flex_divf = document.getElementsByClassName("flex_divf")[0];
        var flex_divv = document.getElementsByClassName("flex_divv")[0];
        var flex_hido = document.getElementsByClassName("flex_hido")[0];
        var flex_hidt = document.getElementsByClassName("flex_hidt")[0];
        var flex_hidh = document.getElementsByClassName("flex_hidh")[0];
        flex_divh.onmouseenter = function(){
            slowAnimate(flex_hido,{"opacity":100})
            this.style.backgroundColor = "rgba(231, 160, 27, 0.6)";
        };
        flex_divh.onmouseleave = function(){
            slowAnimate(flex_hido,{"opacity":0})
            this.style.backgroundColor = "";
        }
        flex_divf.onmouseenter = function(){
            slowAnimate(flex_hidt,{"opacity":100})
            this.style.backgroundColor = "rgba(231, 160, 27, 0.6)";
        }
        flex_divf.onmouseleave = function(){
            slowAnimate(flex_hidt,{"opacity":0})
            this.style.backgroundColor = "";
        }
        flex_divv.onmouseenter = function(){
            slowAnimate(flex_hidh,{"opacity":100})
            this.style.backgroundColor = "rgba(231, 160, 27, 0.6)";
        }
        flex_divv.onmouseleave = function(){
            slowAnimate(flex_hidh,{"opacity":0})
            this.style.backgroundColor = "";
        }

        // 轮播图
        var inner_one = document.getElementsByClassName("inner_one")[0];
        var check_img = document.getElementsByClassName("check_img")[0];
        var chiArr = check_img.children;
        var lun_img = document.getElementsByClassName("lun_img")[0];
        var imgArr = lun_img.children;
        var colimg = imgArr[0].cloneNode(true);
        lun_img.appendChild(colimg);
        var num = 0;
        var key = 0;
        var timer = null;
        Zdplay();
        inner_one.onmouseover = function () {
            clearInterval(timer);
        }
        inner_one.onmouseout = function () {
            Zdplay();
        }
        for(var i=0;i<chiArr.length;i++){
            chiArr[i].index = i;
            chiArr[i].onmouseover = function(){
                for(var j=0;j<chiArr.length;j++){
                    chiArr[j].className = "f_left clearfixed";
                }
                this.className = "current f_left clearfixed";
                num = this.index;
                key = this.index;
                animate(lun_img,-this.index * inner_one.offsetWidth);
            }
        }

            function GoRight(){
                num++;
                key++;
                if(num > imgArr.length-1){
                    lun_img.style.left = 0;
                    num = 1;
                }
                if(key > chiArr.length-1){
                    key = 0;
                }
                for(var i=0;i<chiArr.length;i++){
                    chiArr[i].className = 'f_left clearfixed';
                }
                chiArr[key].className = "current f_left clearfixed";
                animate(lun_img,-num * inner_one.offsetWidth);
            }

            function Zdplay(){
                timer = setInterval(() => {
                    GoRight();
                }, 3000);
            }

        //切换新闻
        var inner_two = document.getElementsByClassName("inner_two")[0];
        var lun_newcheck = document.getElementsByClassName("lun_newcheck")[0];
        var cheArr = lun_newcheck.children;
        var lun_new = document.getElementsByClassName("lun_new")[0];
        for(var i=0;i<cheArr.length-1;i++){
            cheArr[i].index = i;
            cheArr[i].onmouseover = function(){
                for(var j=0;j<cheArr.length;j++){
                    cheArr[j].className = "check_new f_left clearfixed";
                }
                this.className = "current2 check_new f_left clearfixed";
                animatet(lun_new,-this.index * inner_two.offsetWidth);
            }
        }

        // 内容区块
        // 小选项切换
        var content_maincheckul = document.querySelector(".content_maincheckul");
        var content_maincheckul2 = document.querySelector(".content_maincheckul2");
        var liArr = content_maincheckul.children;
        var liArr2 = content_maincheckul2.children;
        var s_section = document.getElementsByClassName("s_section");
        var s_section2 = document.getElementsByClassName("s_section2");
        var num = 0;
        var key = 0;
        for(var i=0;i<liArr.length;i++){
            liArr[i].index = i;
            liArr[i].onmouseover = function(){
                for(var j=0;j<s_section.length;j++){
                    liArr[j].className =  "f_left"; 
                    s_section[j].className = "s_section" ;         
                }
                num = this.index;
                this.className = "fous2 f_left";
                s_section[num].className = "s_section s_section_block";
            }
        }
        for(var i=0;i<liArr2.length;i++){
            liArr2[i].index = i;
            liArr2[i].onmouseover = function(){
                for(var j=0;j<s_section2.length;j++){
                    liArr2[j].className =  "f_left"; 
                    s_section2[j].className = "s_section2" ;         
                }
                key = this.index;
                this.className = "fous2 f_left";
                s_section2[key].className = "s_section2 s_section_block2";
            }
        }

        //大选项切换
        var content_checkul = document.querySelectorAll(".content_check ul li");
        var b_section = document.getElementsByClassName("b_section")[0];
        var b_section2 = document.getElementsByClassName("b_section2")[0];
        var b_section3 = document.getElementsByClassName("b_section3")[0];
        for(var i=0;i<content_checkul.length;i++){
            content_checkul[i].index = i;
            content_checkul[i].onmouseover = function(){
                for(var j=0;j<content_checkul.length;j++){
                    content_checkul[j].className = "f_left";
                }
                this.className = "fous1 f_left";
                if(this.index == 0){
                    b_section.style.display = "block";
                    b_section2.style.display = "none";
                    b_section3.style.display = "none";
                }else if(this.index == 1){
                    b_section2.style.display = "block";
                    b_section.style.display = "none";
                    b_section3.style.display = "none";
                }else{
                    b_section3.style.display = "block";
                    b_section.style.display = "none";
                    b_section2.style.display = "none";
                }
            }
        }
   
        // 英雄资料
        var hero_zl = document.getElementsByClassName("hero_zl")[0];
        var hero_zlli = document.querySelectorAll(".hero_zl ul li");
        var hero_zlsec = document.querySelectorAll(".hero_mc");
        var num = 0;
        var xzyx = document.querySelector(".b_section3 .content_maincheck div")
        hero_zl.style.display = "none";
        xzyx.onmouseenter = function(){
            hero_zl.style.display = "flex";
        }
        hero_zl.onmouseleave = function(){
            hero_zl.style.display = "none";
        }
        for(var i=0;i<hero_zlli.length;i++){
            hero_zlli[i].index = i;
            hero_zlli[i].onmouseover = function(){
              for(var j=0;j<hero_zlsec.length;j++){
                hero_zlli[j].className = "";
                hero_zlsec[j].style.display = "none"
               } 
               num = this.index;
               this.className = "hero_ck";
               hero_zlsec[num].style.display = "block"
            }
            hero_zlli[i].onmouseout = function(){
                this.className = "";
               }
        }

        // 右部分轮播
        var content_check2ul = document.querySelectorAll(".content_check2 ul li");
        var lun_heroli = document.querySelectorAll(".lun_hero li");
        var lun_hero = document.getElementsByClassName("lun_hero")[0];
        var yxlb_box = document.getElementsByClassName("yxlb_box")[0];
        for(var i=0;i<content_check2ul.length;i++){
            content_check2ul[i].index = i;
            content_check2ul[i].onmouseover = function(){
                for(var j=0;j<lun_heroli.length;j++){
                    content_check2ul[j].className = "f_left";
                }
                this.className = "fous3 f_left";
                animatet(lun_hero,-this.index * yxlb_box.offsetWidth);
            }
        }

        //右部分英雄图片
        var img = document.querySelectorAll(".yx_small img");
        for(var i=0;i<img.length;i++){
            img[i].index = i;
            img[i].onmouseover = function(){
                this.innerHTML = "<img src='./images/yx_font.png' alt='>";
            }
        }


        function slowAnimate(ele, json, fn) {
            clearInterval(ele.timer);
            ele.timer = setInterval(function () {
                var bool = true;
                for (var k in json) {
                    var larder;
                    if (k == "opacity") {
                        larder = getStyle(ele, k) * 100;
                    } else {
                        larder = parseInt(getStyle(ele, k));
                    }
                    var step = (json[k] - larder) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    larder = larder + step;
                    if (k == "opacity") {
                        ele.style[k] = larder / 100;
                    }else if(k == "zIndex"){
                        ele.style[k] = json[k];
                    } 
                    else {
                        ele.style[k] = larder + "px";
                    }
                    if (json[k] != larder) {
                        bool = false;
                    }
                }
                if (bool) {
                    clearInterval(ele.timer);
                    fn && fn();
                }
            }, 10);
        }

        // 内容第二部分左部分
        var contentt_checkul = document.querySelectorAll(".contentt_check ul li");
        var s_sectiont = document.querySelectorAll(".s_sectiont");
        var num = 0;
        s_sectiont[0].style.display = "block";
        for(var i=0;i<contentt_checkul.length;i++){
            contentt_checkul[i].index = i;
            contentt_checkul[i].onmouseover = function(){
                for(var j=0;j<contentt_checkul.length;j++){
                    contentt_checkul[j].className = '';
                    s_sectiont[j].style.display = "none";
                }
                num = this.index;
                this.className = "option1";
                s_sectiont[num].style.display = "block";
            }
        }

        function animate(ele, target) {
            clearInterval(ele.timer);
            ele.timer = setInterval(() => {
                var step = (target - ele.offsetLeft) > 0 ? 400 : -400;
                if (Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
                    ele.style.left = target + "px";
                    clearInterval(ele.timer);
                } else {
                    ele.style.left = ele.offsetLeft + step + "px";
                }
            }, 30);
        }

        function animatet(ele, target) {
            clearInterval(ele.timer);
            ele.timer = setInterval(() => {
                var step = (target - ele.offsetLeft) > 0 ? 30 : -30;
                if (Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
                    ele.style.left = target + "px";
                    clearInterval(ele.timer);
                } else {
                    ele.style.left = ele.offsetLeft + step + "px";
                }
            }, 30);
        }

        function getStyle(ele, attr) { //ele什么元素，attr什么属性
            if (window.getComputedStyle) {
                return window.getComputedStyle(ele, null)[attr];
            }
            return ele.currentStyle[attr];
        }
    }

        