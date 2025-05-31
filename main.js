var typed = new Typed(".text", {
    strings: ["passionate learner.", "student.", "coding newbie."], // corrected "string" to "strings" and used square brackets []
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, // corrected backdelay to backDelay (capital D)
    loop: true
});




  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const percentages = entry.target.querySelectorAll('.percentage');
        percentages.forEach(perc => {
          const target = +perc.getAttribute('data-percentage');
          let count = 0;

          const updateCount = () => {
            if (count <= target) {
              perc.textContent = count + '%';
              count++;
              requestAnimationFrame(updateCount);
            }
          };

          updateCount();
        });

        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.6 });

  const skillsSection = document.querySelector('.radial-bars');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
