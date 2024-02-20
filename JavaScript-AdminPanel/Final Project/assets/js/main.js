$(document).ready(function () {
    // To-Top
    $(window).scroll(function () {
        if (scrollY > 0) {
            $("header").addClass("sticky");
        }
        else {
            $("header").removeClass("sticky");
        }
    });

    $('.home-content').click(function () {
        $('aside').toggleClass('aside-close')
        $('.logo-details').toggleClass('aside-close')
        $('.nav-sides').toggleClass('d-lg-none');
        $('.link_name').toggleClass('d-lg-none');
        $('.nav-links .fa-chevron-right').toggleClass('d-lg-none');
        $('.nav-links .badge').toggleClass('d-lg-none');
        $('.light-1').toggleClass('d-none');
        $('.light-2').toggleClass('d-lg-block');
        $('.Home-section').toggleClass('full-dashboard-header');
        $('.Main-Content').toggleClass('full-dashboard-Main-content');
    });

    $("#Apps").click(function () {
        $(".Blocks").slideToggle();
        $(".fa-chevron-right").toggleClass("fa-chevron-down");
    })

    // To-Top
    // Color-Swicther Start

    // $('.primary').click(function () {
    //     $(':root').css("--primary", "#ef6838");
    // });
    // $('.lightblue').click(function () {
    //     $(':root').css("--primary", "blue");
    // });
    // $('.lightgoldenrodyellow').click(function () {
    //     $(':root').css("--primary", "goldenrod");
    // });
    // $('.lightgray').click(function () {
    //     $(':root').css("--primary", "gray");
    // });
    // $('.lightgreen').click(function () {
    //     $(':root').css("--primary", "green");
    // });
    // $('.lightpink').click(function () {
    //     $(':root').css("--primary", "pink");
    // });
    // $('.lightsalmon').click(function () {
    //     $(':root').css("--primary", "salmon");
    // });
    // $('.lightseagreen').click(function () {
    //     $(':root').css("--primary", "seagreen");
    // });
    // $('.lightskyblue').click(function () {
    //     $(':root').css("--primary", "skyblue");
    // });
    // $('.lightsteelblue').click(function () {
    //     $(':root').css("--primary", "steelblue");
    // });

    // $('.setting').click(function () {
    //     $('.Color-Switcher').toggleClass("rrt");
    // });

    // Color-Swicther End
    // Side-Bar Start

    // const arrows = document.querySelectorAll(".arrow");

    // arrows.forEach((arrow) => {
    //     arrow.addEventListener("click", (e) => {
    //         const arrowParent = e.target.closest(".arrow").parentElement.parentElement;
    //         arrowParent.classList.toggle("showMenu");
    //     });
    // });

    // const sidebar = document.querySelector(".sidebar");
    // const sidebarBtn = document.querySelector(".bx-menu");

    // sidebarBtn.addEventListener("click", () => {
    //     sidebar.classList.toggle("close");
    // });


    // Side-Bar End
    // Chart Start

    var myCanvas = document.getElementById("sales");
    myCanvas.height = "350";

    var myCanvasContext = myCanvas.getContext("2d");
    var gradientStroke1 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
    gradientStroke1.addColorStop(0, 'rgba(86, 56, 255, 0.8)');
    gradientStroke1.addColorStop(1, 'rgba(86, 56, 255, 0.2)');

    var gradientStroke2 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
    gradientStroke2.addColorStop(0, 'rgba(1, 184, 255, 0.8)');
    gradientStroke2.addColorStop(1, 'rgba(1, 184, 255, 0.2) ');
    var myChart = new Chart(myCanvas, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            type: 'line',
            datasets: [{
                label: 'Total Win',
                data: [47, 45, 154, 38, 156, 24, 65, 31, 137, 39, 162, 51, 35, 141, 35, 27, 93, 53],
                backgroundColor: gradientStroke1,
                borderColor: '#8760fb',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: gradientStroke1,
                pointBorderColor: '#8760fb',
                pointHoverBorderColor: gradientStroke1,
                pointBorderWidth: 0,
                pointRadius: 0,
                pointHoverRadius: 0,
                lineTension: 0.2,
                borderWidth: 2,
                fill: 'origin'
            }, {
                label: 'Total Loss',
                data: [61, 27, 54, 143, 119, 46, 47, 45, 54, 138, 56, 24, 165, 31, 37, 39, 62, 51, 35, 41],
                backgroundColor: gradientStroke2,
                borderColor: '#01b8ff',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: gradientStroke2,
                pointBorderColor: '#01b8ff',
                pointHoverBorderColor: gradientStroke2,
                pointBorderWidth: 0,
                pointRadius: 0,
                pointHoverRadius: 0,
                lineTension: 0.2,
                borderWidth: 2,
                fill: 'origin'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                cornerRadius: 3,
                intersect: false,
            },
            stepsize: 200,
            min: 0,
            max: 400,
            legend: {
                display: true,
                labels: {
                    usePointStyle: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: 'rgba(142, 156, 173,0.1)',
                        color: 'rgba(119, 119, 142, 0.08)'
                    },
                    ticks: {
                        autoSkip: true,
                        color: '#b0bac9'
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month',
                        fontColor: 'transparent'
                    }
                },
                y: {
                    ticks: {
                        color: "#b0bac9",
                    },
                    display: true,
                    grid: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: 'rgba(142, 156, 173,0.1)',
                        color: "rgba(142, 156, 173,0.1)",
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'sales',
                        fontColor: 'transparent'
                    }
                }
            },
            title: {
                display: false,
                text: 'Normal Legend'
            },
        }
    });
    /* chartjs closed */

    // Chart End

    // Inspect Js Start


    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
        }
    });

    // $(document).on("contextmenu", function (e) {
    //     e.preventDefault();
    // });

    // Inspect Js End
    // Aside JS Start
    
    // Aside JS End

});