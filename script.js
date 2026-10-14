(function () {
  var STORAGE_KEY = "portfolio-comments";

  function trim(value) {
    return String(value || "").trim();
  }

  function getComments() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      return [];
    }
  }

  function validateComment(name, body) {
    return Boolean(trim(name) && trim(body));
  }

  function addComment(name, body) {
    if (!validateComment(name, body)) {
      return { ok: false, error: "Name and comment are required." };
    }

    var comments = getComments();
    comments.push({
      name: trim(name),
      body: trim(body),
      at: Date.now(),
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    return { ok: true };
  }

  function renderComments(container) {
    if (!container) {
      return;
    }

    container.replaceChildren();
    var comments = getComments();

    if (!comments.length) {
      var empty = document.createElement("p");
      empty.className = "comments-empty";
      empty.textContent = "No comments yet. Be the first.";
      container.appendChild(empty);
      return;
    }

    comments.forEach(function (comment) {
      var article = document.createElement("article");
      article.className = "comment-item";

      var heading = document.createElement("h3");
      heading.textContent = comment.name;

      var paragraph = document.createElement("p");
      paragraph.textContent = comment.body;

      article.appendChild(heading);
      article.appendChild(paragraph);
      container.appendChild(article);
    });
  }

  function setStatus(el, message, kind) {
    if (!el) {
      return;
    }
    el.textContent = message;
    el.className = "form-status" + (kind ? " " + kind : "");
  }

  function initComments() {
    var form = document.getElementById("comment-form");
    var list = document.getElementById("comment-list");
    var status = document.getElementById("comment-status");
    var nameInput = document.getElementById("comment-name");
    var bodyInput = document.getElementById("comment-body");

    if (!form || !list) {
      return;
    }

    renderComments(list);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var result = addComment(nameInput.value, bodyInput.value);

      if (!result.ok) {
        setStatus(status, result.error, "error");
        return;
      }

      form.reset();
      setStatus(status, "Comment saved in this browser.", "ok");
      renderComments(list);
    });
  }

  function initContact() {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("contact-status");
    var nameInput = document.getElementById("contact-name");
    var emailInput = document.getElementById("contact-email");
    var messageInput = document.getElementById("contact-message");

    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = trim(nameInput.value);
      var email = trim(emailInput.value);
      var message = trim(messageInput.value);

      if (!name || !email || !message) {
        setStatus(status, "Please fill in name, email, and message.", "error");
        return;
      }

      var subject = encodeURIComponent("Portfolio message from " + name);
      var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
      window.location.href = "mailto:hello@example.com?subject=" + subject + "&body=" + body;
      setStatus(status, "Opening your email app…", "ok");
    });
  }

  function initNavHighlight() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
    if (!links.length) {
      return;
    }

    function setCurrent(id) {
      links.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    var sections = ["about", "projects", "skills", "contact"]
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              setCurrent(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
      );
      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    setCurrent("about");
  }

  window.PortfolioComments = {
    STORAGE_KEY: STORAGE_KEY,
    getComments: getComments,
    validateComment: validateComment,
    addComment: addComment,
    renderComments: renderComments,
  };

  initComments();
  initContact();
  initNavHighlight();
})();
