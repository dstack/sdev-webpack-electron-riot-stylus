<test>
  <div>
    Hello World<br/>
    Count: {count}<br/><br/>
    Speedy Dev - Riotjs and Stylus
  </div>

  <script>
    this.count = 0;

    setInterval(() => {
      this.count++;
      this.update();
    }, 1000)
  </script>

</test>
