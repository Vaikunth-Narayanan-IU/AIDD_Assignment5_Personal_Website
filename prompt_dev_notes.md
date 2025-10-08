# AI Prompts & Development Notes

This file logs some of the prompts I used with an AI assistant (like Gemini or CoPilot) while building my portfolio website. It also includes a reflection on the process.

---

## Prompt Log

### Prompt 1: Making the Homepage Cards Responsive

* **My Prompt:** "I have three cards in a row on my homepage inside a div with the class `cards`. They look good on a big screen, but on my phone, they get all squished. How do I make them stack on top of each other in a single column on mobile?"

* **AI Output:**
    ```css
    /* In your style.css file */
    .cards {
      display: grid;
      gap: 16px;
    }

    /* Add this media query for screens smaller than 880px */
    @media (min-width: 880px) {
      .cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    ```

* **My Notes:** **Accepted.** This was a huge help. I knew about media queries but wasn't sure of the exact syntax for CSS Grid. The AI gave me the `min-width` approach, which was the opposite of what I was thinking, but it actually makes more sense to code for mobile first and then add complexity for larger screens. I used this code exactly as is.

### Prompt 2: Checking for Matching Passwords

* **My Prompt:** "I have a contact form with two password fields, `password` and `confirmPassword`. I need to write the javascript to check if they match when the user clicks submit. If they don't match, I need to show an error message."

* **AI Output:**
    ```javascript
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        event.preventDefault(); // Stop the form from submitting
      }
    });
    ```

* **My Notes:** **Modified.** The AI's output worked, but it was a bit basic. It used a simple `alert()`, which felt jarring. My form already had dedicated error message divs and a function to handle setting error text. So, I took the core logic (`password.value !== confirmPassword.value`) and integrated it into my existing validation function. It saved me from looking up the syntax, but I had to adapt it to fit my project's structure.

### Prompt 3: Cool 3D-ish Hover Effect for my Picture

* **My Prompt:** "Can you give me a cool CSS hover effect for my profile picture on the homepage? I want something that feels a little 3D, like it's tilting when I move my mouse over it."

* **AI Output:**
    ```css
    .avatar {
      transition: transform 0.4s ease;
    }

    .avatar:hover {
      transform: perspective(800px) rotateY(-8deg) rotateX(4deg) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    ```

* **My Notes:** **Accepted.** I would have never figured this out on my own without a ton of searching. I didn't even know the `perspective` property existed. The AI gave me this code, and it looked great right out of the box. It instantly made the page feel more dynamic and professional. This was a perfect use case for AI—generating complex, creative code that I could just plug in.

---

## Reflection

Using an AI assistant to build this site was a game-changer, especially for saving time. When it came to boilerplate CSS like setting up a responsive grid or creating a complex `transform` effect, the AI was incredibly fast. It saved me from the tedious cycle of searching, trying, and failing that often slows down styling work. I could just describe the visual outcome I wanted, and it would generate a working, high-quality snippet in seconds.

However, the AI definitely wasn't perfect. Its biggest weakness was context. For the JavaScript form validation, it gave me a generic, standalone solution instead of code that would fit into my existing functions. I had to manually refactor its output to avoid breaking my established patterns.

Ultimately, I found a good balance by treating the AI as a hyper-efficient junior developer. I'd give it clear, isolated tasks—like "create this effect" or "write this logic"—but I took full responsibility for integration, debugging, and ensuring the final code fit the bigger picture. It handled the "how," which let me focus more on the "what" and "why."
