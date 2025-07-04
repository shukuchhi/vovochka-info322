particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 6.25,
            "density": {
                "enable": true,
                "value_area": 100
            }
        },
        "color": {
            "value": "#7765c7"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#4b3048"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 22.5,
                "height": 12
            }
        },
        "opacity": {
            "value": 0.2,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1.5,
                "opacity_min": 0.2,
                "sync": true
            }
        },
        "size": {
            "value": 1.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 7.6,
                "size_min": 0.6,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 12.5,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 4,
                "rotateY": 6.5
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 30.5,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 20,
                "size": 7.5,
                "duration": 1.2,
                "opacity": 2.1,
                "speed": 2.7
            },
            "repulse": {
                "distance": 28.1,
                "duration": 0.7
            },
            "push": {
                "particles_nb": 5.12
            },
            "remove": {
                "particles_nb": 5.8
            }
        }
    },
    "retina_detect": true
});

function updateVisitorCount() {
    fetch('counter.php')
        .then(response => response.json())
        .then(data => {
            const visitorCountElement = document.getElementById('visitor-count');
            if (visitorCountElement) {
                visitorCountElement.textContent = `Unique Visits: ${data.count}`;
            } else {
                console.error('Element with id "visitor-count" not found');
            }
        })
        .catch(error => console.error('Error updating visitor count:', error));
}

window.addEventListener('load', updateVisitorCount);