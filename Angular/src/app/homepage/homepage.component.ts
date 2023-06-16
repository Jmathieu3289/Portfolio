import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  ngOnInit(): void {
    const sketch = (s: p5) => {

      const NUM_RUNNERS = 500;
      const MOUSE_INFLUENCE = -0.007;
      const FLOW_INFLUENCE = 0.9;
      const FLOW_SCALE = 4;
      const TRAIL_INTENSITY = 100;
      const STARTING_SPEED = 1;
      const ACCELERATION = 0.003;
      const VISIBILITY_RATE = 2;
      const CIRCLE_SIZE = 3;
      const BACKGROUND_FILL = 15;
      const FOREGROUND_FILL = 120;

      let runners: any[] = [];

      s.setup = () => {
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.parent('hero-container');

        s.noStroke();
        s.fill(FOREGROUND_FILL);

        for (let i = 0; i < NUM_RUNNERS; i++) {
          runners.push({
            pos: s.createVector(s.random(s.width), s.random(s.height)),
            a: 0,
            s: STARTING_SPEED,
            v: 255
          });
        }

        s.background(BACKGROUND_FILL);
      };

      s.draw = () => {
        s.background(BACKGROUND_FILL, TRAIL_INTENSITY);
        runners.forEach(runner => {

          s.fill(FOREGROUND_FILL, runner.v);
          s.circle(runner.pos.x, runner.pos.y, CIRCLE_SIZE);

          runner.a = s.lerp(runner.a, s.map(s.noise(runner.pos.x/s.width*FLOW_SCALE, runner.pos.y/s.height*FLOW_SCALE), 0, 1, 0, s.TWO_PI), FLOW_INFLUENCE);
          runner.s += ACCELERATION;
          runner.v = Math.min(runner.v + VISIBILITY_RATE, 255);

          runner.pos.add(s.createVector(runner.s, 0).rotate(runner.a));
          if ((s.mouseX == 0 && s.mouseY == 0) || (s.mouseX < 0 || s.mouseX > s.width || s.mouseY < 0 || s.mouseY > s.height)) {
            runner.pos.add(s.createVector(s.width/2 - runner.pos.x, s.height/2 - runner.pos.y).mult(MOUSE_INFLUENCE));
          } else {
            runner.pos.add(s.createVector(s.mouseX - runner.pos.x, s.mouseY - runner.pos.y).mult(MOUSE_INFLUENCE));
          }
          

          if (runner.pos.x < 0 || runner.pos.x > s.width || runner.pos.y < 0 || runner.pos.y > s.height) {
            runner.pos = s.createVector(s.random(s.width), s.random(s.height));
            runner.s = STARTING_SPEED;
            runner.v = 0;
          }
        });
      };
    }

    let canvas = new p5(sketch);
  }

}
