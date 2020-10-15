setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    
    var hours = "rotate(" + hrotation + "deg)";
    $("#hour").css({"transform": hours});

    var minutes = "rotate(" + mrotation + "deg)";
    $("#minute").css({"transform": minutes});

    var seconds = "rotate(" + srotation + "deg)";
    $("#second").css({"transform": seconds});

}, 1000);