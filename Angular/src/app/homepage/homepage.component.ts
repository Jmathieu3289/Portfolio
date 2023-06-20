import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  backgroundCode: string = `const NUM_RUNNERS = 500;
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
      runner.pos.add(s.createVector(s.width/2 - runner.pos.x, s.height/2 - runner.pos.y).mult(-MOUSE_INFLUENCE));
    } else {
      runner.pos.add(s.createVector(s.mouseX - runner.pos.x, s.mouseY - runner.pos.y).mult(-MOUSE_INFLUENCE));
    }
    

    if (runner.pos.x < 0 || runner.pos.x > s.width || runner.pos.y < 0 || runner.pos.y > s.height) {
      runner.pos = s.createVector(s.random(s.width), s.random(s.height));
      runner.s = STARTING_SPEED;
      runner.v = 0;
    }
  });
};`;

  MOUSE_INFLUENCE = 0.007;
  FLOW_INFLUENCE = 0.9;
  FLOW_SCALE = 4;
  TRAIL_INTENSITY = 100;
  STARTING_SPEED = 1;
  ACCELERATION = 0.003;
  VISIBILITY_RATE = 2;
  CIRCLE_SIZE = 3;
  BACKGROUND_FILL = "#0f0f0f";
  FOREGROUND_FILL = "#787878";

  bgTextHidden = false;

  ngOnInit(): void {
    const sketch = (s: p5) => {

      const NUM_RUNNERS = 500;
      let runners: any[] = [];

      s.setup = () => {
        let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
        cnv.parent('hero-container');

        s.noStroke();
        s.fill(this.FOREGROUND_FILL);

        for (let i = 0; i < NUM_RUNNERS; i++) {
          runners.push({
            pos: s.createVector(s.random(s.width), s.random(s.height)),
            a: 0,
            s: this.STARTING_SPEED,
            v: 255
          });
        }

        s.background(this.BACKGROUND_FILL);
      };

      s.draw = () => {
        let c = s.color(this.BACKGROUND_FILL);
        s.background(s.red(c), s.green(c), s.blue(c), this.TRAIL_INTENSITY);
        runners.forEach(runner => {

          let c = s.color(this.FOREGROUND_FILL);
          s.fill(s.red(c), s.green(c), s.blue(c), runner.v);
          s.circle(runner.pos.x, runner.pos.y, this.CIRCLE_SIZE);

          runner.a = s.lerp(runner.a, s.map(s.noise(runner.pos.x/s.width*this.FLOW_SCALE, runner.pos.y/s.height*this.FLOW_SCALE), 0, 1, 0, s.TWO_PI), this.FLOW_INFLUENCE);
          runner.s += this.ACCELERATION;
          runner.v = Math.min(runner.v + this.VISIBILITY_RATE, 255);

          runner.pos.add(s.createVector(runner.s, 0).rotate(runner.a));
          if ((s.mouseX == 0 && s.mouseY == 0) || (s.mouseX < 0 || s.mouseX > s.width || s.mouseY < 0 || s.mouseY > s.height)) {
            runner.pos.add(s.createVector(s.width/2 - runner.pos.x, s.height/2 - runner.pos.y).mult(-this.MOUSE_INFLUENCE));
          } else {
            runner.pos.add(s.createVector(s.mouseX - runner.pos.x, s.mouseY - runner.pos.y).mult(-this.MOUSE_INFLUENCE));
          }
          

          if (runner.pos.x < 0 || runner.pos.x > s.width || runner.pos.y < 0 || runner.pos.y > s.height) {
            runner.pos = s.createVector(s.random(s.width), s.random(s.height));
            runner.s = this.STARTING_SPEED;
            runner.v = 0;
          }
        });
      };
    }

    let canvas = new p5(sketch);
  }

}
