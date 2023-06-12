window.addEventListener("DOMContentLoaded", function() {
    const textArea = document.getElementById("text");
    const countBtn = document.getElementById("count-btn");
    const wordCount = document.getElementById("count");
    
    countBtn.addEventListener("click", function() {
      const text = textArea.value.trim();
      const words = text.split(/\s+/).filter(function(word) {
        return word.length > 0;
      });
      
      wordCount.textContent = words.length;
    });
  });
  