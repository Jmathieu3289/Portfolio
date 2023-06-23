import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'jm-thanks-section',
  templateUrl: './thanks-section.component.html',
  styleUrls: ['./thanks-section.component.scss']
})
export class ThanksSectionComponent implements OnInit {

  visible = false;

  ngOnInit(): void {

    // Check visibility
    let options = {
      rootMargin: "0px",
      threshold: 0.0,
    };

    let callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      });
    };
    
    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector("#thanks-container");
    if (target) {
      observer.observe(target);
    }
  
    // Background sketch
    const sketch = (s: p5) => {

      const SIZE = 25;
      const SPACING = 45;
      const NOISE_INFLUENCE = 5;

      let a = 0;

      s.setup = () => {
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.parent('thanks-container');

        s.fill(18);
        s.noStroke();
      };

      s.draw = () => {
        if (!this.visible) {
          s.background(15);
          return;
        }

        s.background(15);

        a += s.PI/40000;

        for (let x = 0; x <= s.width; x += SPACING) {
          for (let y = 0; y <= s.height + 80; y += SPACING) {
            let size = s.cos((x * s.cos(a)) + (y * s.sin(a))) * SIZE;
            size *= s.map(s.dist(x, y, s.mouseX, s.mouseY), 0, 600, 0.2, 1);
            s.circle(x + s.map(s.noise(x), 0, 1, -NOISE_INFLUENCE, NOISE_INFLUENCE), y + s.map(s.noise(y), 0, 1, -NOISE_INFLUENCE, NOISE_INFLUENCE), size);
          }
        }
      };
    }

    new p5(sketch);
  }

}
