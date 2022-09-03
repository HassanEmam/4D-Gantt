(() => {
  "use strict";
  const t = [
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 3, 1),
      end: new Date(2020, 3, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
    {
      id: 1,
      name: "Task 1",
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 30),
      parent: 0,
    },
    {
      id: 2,
      name: "Task 2",
      start: new Date(2020, 0, 12),
      end: new Date(2020, 1, 28),
      parent: 0,
    },
    {
      id: 3,
      name: "Task 3",
      start: new Date(2020, 2, 1),
      end: new Date(2020, 2, 30),
      parent: 0,
    },
  ];
  function i(t, i, e, s, a, n) {
    t.save(),
      (t.strokeStyle = n),
      (t.lineWidth = 1),
      t.beginPath(),
      t.moveTo(i, e),
      t.lineTo(s, a),
      t.stroke(),
      t.restore();
  }
  function e(t) {
    let i = new Date(0),
      e = t[0].start;
    return (
      t.forEach((t) => {
        t.end > i && (i = t.end), t.start < e && (e = t.start);
      }),
      [e, i]
    );
  }
  function s(t, i) {
    const e = i.getTime() - t.getTime();
    return Math.ceil(e / 864e5) + 1;
  }
  function a(t, i, e) {
    return ["M", "T", "W", "T", "F", "S", "S"][new Date(t, i, e).getDay()];
  }
  function n(t, i) {
    var e = new Date(t);
    return e.setDate(e.getDate() + i), e;
  }
  const h = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function o(t, i, e, s) {
    const a = i.getTime(),
      n = e.getTime() - a,
      h = t.getTime();
    return Math.ceil((s / n) * (h - a));
  }
  class d {
    constructor(t, i, s, a) {
      (this.options = s),
        (this.dateLine = a),
        (this.canvas = i),
        (this.ctx = t);
      let n = e(this.options.data);
      (this.minDate = n[0]),
        (this.maxDate = n[1]),
        (this.maxValue = n[1].getTime()),
        (this.minValue = n[0].getTime()),
        (this.xpos = o(
          this.dateLine,
          this.minDate,
          this.maxDate,
          this.canvas.width - 2 * this.options.padding
        ));
    }
    draw() {
      this.ctx.beginPath(),
        (this.ctx.strokeStyle = "red"),
        (this.ctx.lineWidth = 3),
        this.ctx.moveTo(this.xpos + this.options.padding, this.options.padding),
        this.ctx.lineTo(
          this.xpos + this.options.padding,
          this.canvas.height - this.options.padding
        ),
        this.ctx.stroke();
    }
    update(t) {
      (this.dateLine = t),
        (this.xpos = o(
          this.dateLine,
          this.minDate,
          this.maxDate,
          this.canvas.width - 2 * this.options.padding
        )),
        this.draw();
    }
    collision(t, i) {
      this.xpos + this.options.padding - 5 <= t &&
      this.xpos + this.options.padding + 5 >= t
        ? (this.ctx.beginPath(),
          (this.ctx.strokeStyle = "red"),
          (this.ctx.lineWidth = 3),
          this.ctx.moveTo(
            this.xpos + this.options.padding,
            this.options.padding
          ),
          this.ctx.lineTo(
            this.xpos + this.options.padding,
            this.canvas.height - this.options.padding
          ),
          this.ctx.stroke())
        : (this.ctx.beginPath(),
          (this.ctx.strokeStyle = "blue"),
          (this.ctx.lineWidth = 3),
          this.ctx.moveTo(
            this.xpos + this.options.padding,
            this.options.padding
          ),
          this.ctx.lineTo(
            this.xpos + this.options.padding,
            this.canvas.height - this.options.padding
          ),
          this.ctx.stroke());
    }
  }
  class r {
    constructor(t, i, e, s, a, n, h, o) {
      (this.width = e),
        (this.height = s),
        (this.x = t),
        (this.y = i),
        (this.color = n),
        (this.fontColor = h),
        (this.name = o),
        (this.context = a),
        (this.hoverColor = "red");
    }
    draw(t, i, e) {
      if (
        (t ? (this.color = t) : this.color ? this.color : (this.color = "blue"),
        i
          ? (this.fontColor = i)
          : this.fontColor
          ? this.fontColor
          : (this.fontColor = "white"),
        e ? (this.name = e) : this.name ? this.name : (this.name = "Task"),
        this.name)
      ) {
        (this.context.textAlign = "center"),
          (this.context.textBaseline = "middle");
        let t = Math.min(this.width / 1.5, this.height / 1.5);
        (this.context.font = `${t}px Arial`),
          (this.context.fillStyle = this.color),
          this.context.fillRect(this.x, this.y, this.width, this.height),
          (this.context.fillStyle = this.fontColor),
          this.context.fillText(
            this.name,
            this.x + this.width / 2,
            this.y + this.height / 2
          );
      }
    }
    update(t, i) {
      this.draw(), (this.x = t), (this.y = i);
    }
    collision(t, i) {
      return t >= this.x &&
        t <= this.x + this.width &&
        i >= this.y &&
        i <= this.y + this.height
        ? ((this.color = this.hoverColor), this.draw(), !0)
        : ((this.color = "blue"), this.draw(), !1);
    }
  }
  class p {
    constructor(t, i, s) {
      (this.options = s), (this.canvas = i), (this.ctx = t);
      let a = e(this.options.data);
      (this.minDate = a[0]),
        (this.maxDate = a[1]),
        (this.maxValue = a[1].getTime()),
        (this.minValue = a[0].getTime());
    }
    draw() {
      let t = this.maxDate.getFullYear() - this.minDate.getFullYear(),
        e = (function (t, i) {
          let e;
          return (
            (e = 12 * (i.getFullYear() - t.getFullYear())),
            (e -= t.getMonth()),
            (e += i.getMonth()),
            e <= 0 ? 0 : e
          );
        })(this.minDate, this.maxDate),
        d = s(this.minDate, this.maxDate);
      console.log(t, e, d, this.canvas.width);
      for (let t = 0; t < d; t++) {
        let e = o(
            n(this.minDate, t),
            this.minDate,
            this.maxDate,
            this.canvas.width - 2 * this.options.padding
          ),
          s = n(this.minDate, t),
          h = a(s.getFullYear(), s.getMonth(), s.getDate() - 1);
        console.log(
          a(s.getFullYear(), s.getMonth(), s.getDate() - 1),
          s,
          s.getDate(),
          s.getMonth(),
          s.getFullYear(),
          "\n Date Entered " + new Date(2022, 0, 30).getDay(),
          a(2022, 0, 30)
        ),
          (this.ctx.textAlign = "center"),
          (this.ctx.textBaseline = "middle");
        let d = Math.min(12);
        (this.ctx.font = `${d}px Arial`),
          (this.ctx.fillStyle = "black"),
          this.ctx.fillText(
            s.getDate().toString(),
            e + this.options.padding,
            50
          ),
          this.ctx.fillText(h, e + this.options.padding, 85),
          i(
            this.ctx,
            e + this.options.padding + 15,
            40,
            e + this.options.padding + 15,
            this.canvas.height - this.options.padding,
            "lightgray"
          );
      }
      i(
        this.ctx,
        this.options.padding - 15,
        40,
        this.canvas.width - this.options.padding + 15,
        40,
        "black"
      ),
        i(
          this.ctx,
          this.options.padding - 15,
          70,
          this.canvas.width - this.options.padding + 15,
          70,
          "black"
        );
      let r = this.minDate;
      for (; r <= this.maxDate; ) {
        let t = r.getMonth(),
          e = r.getFullYear(),
          s = r.getDate(),
          a = h[t],
          n = o(
            new Date(e, t, 0),
            this.minDate,
            this.maxDate,
            this.canvas.width - 2 * this.options.padding
          ),
          d =
            (n +
              o(
                new Date(e, t + 1, 0),
                this.minDate,
                this.maxDate,
                this.canvas.width - 2 * this.options.padding
              )) /
            2;
        (this.ctx.textAlign = "center"), (this.ctx.textBaseline = "middle");
        let p = Math.min(18);
        (this.ctx.font = `${p}px Arial`),
          (this.ctx.fillStyle = "black"),
          this.ctx.fillText(a, d + this.options.padding, 30),
          (t += 1),
          console.log(a),
          (r = new Date(e, t, s)),
          i(
            this.ctx,
            n + this.options.padding + 15,
            15,
            n + this.options.padding + 15,
            this.canvas.height - this.options.padding,
            "black"
          );
      }
      i(
        this.ctx,
        this.options.padding - 15,
        15,
        this.canvas.width - this.options.padding + 15,
        15,
        "black"
      );
    }
    update(t) {}
  }
  class l {
    constructor(t) {
      (this.options = t),
        (this.canvas = t.canvas),
        (this.canvas.height =
          2 * this.options.padding + 50 * this.options.data.length),
        (this.ctx = this.canvas.getContext("2d")),
        (this.colors = t.colors),
        (this.titleOptions = t.titleOptions);
      let i = e(this.options.data);
      (this.maxValue = i[1].getTime()),
        (this.minValue = i[0].getTime()),
        (this.minDate = i[0]),
        (this.maxDate = i[1]);
      let a = s(this.minDate, this.maxDate);
      console.log(a),
        (this.canvas.width = 30 * a),
        (this.dateLine = new d(
          this.ctx,
          this.canvas,
          this.options,
          this.minDate
        )),
        (this.timeLine = new p(this.ctx, this.canvas, this.options)),
        (this.tasks = []),
        new Date(2020, 1, 15),
        this.canvas.addEventListener("mousemove", (t) => {
          let i = t.target.parentElement;
          for (let e of this.tasks)
            e.collision(t.pageX - i.offsetLeft, t.pageY - i.offsetTop);
          this.dateLine.collision(
            t.pageX - i.offsetLeft,
            t.pageY - i.offsetTop
          );
        });
    }
    drawGridLines() {
      this.canvas.height, this.options.padding;
      var t = this.canvas.width - 2 * this.options.padding;
      this.maxValue,
        this.options.padding,
        i(
          this.ctx,
          this.options.padding - 15,
          this.options.padding,
          this.options.padding + t + 15,
          this.options.padding,
          "black"
        );
      for (let e in this.options.data)
        i(
          this.ctx,
          this.options.padding,
          this.options.padding + 50 * (parseInt(e) + 1),
          this.options.padding + t,
          this.options.padding + 50 * (parseInt(e) + 1),
          "lightgray"
        );
      this.options.gridScale;
    }
    drawBars() {
      this.canvas.height, this.options.padding;
      var t = this.canvas.width - 2 * this.options.padding;
      Object.values(this.options.data);
      for (let i in this.options.data) {
        let e = this.options.data[i],
          s = this.options.padding + 50 * parseInt(i) + 10,
          a = o(e.start, this.minDate, this.maxDate, t),
          n = o(e.end, this.minDate, this.maxDate, t) - a,
          h = new r(
            a + this.options.padding,
            s,
            n,
            30,
            this.ctx,
            "blue",
            "white",
            e.name
          );
        this.tasks.push(h), h.draw(), this.ctx.restore();
      }
    }
    drawDateLine() {
      (this.dateLine = new d(
        this.ctx,
        this.canvas,
        this.options,
        new Date(2020, 1, 15)
      )),
        this.dateLine.draw();
    }
    drawTimeLine() {
      (this.timeLine = new p(this.ctx, this.canvas, this.options)),
        this.timeLine.draw();
    }
    draw() {
      this.drawGridLines(),
        this.drawBars(),
        this.drawDateLine(),
        this.drawTimeLine();
    }
  }
  let c = t;
  !(function () {
    let t = document.getElementById("chartCanvas");
    (t.width = t.parentElement.clientWidth),
      (t.height = 500),
      new l({
        canvas: t,
        padding: 100,
        gridScale: 5,
        gridColor: "black",
        data: c,
        titleOptions: "Music",
        colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
      }).draw();
  })();
})();
