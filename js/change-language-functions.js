var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Άδεια χειριστή ταχυπλόου σκάφους",
      pageTitle: "Άδεια χειριστή ταχυπλόου σκάφους",
      infoTitle: "Πληροφορίες για την χορήγηση Άδεια χειριστή ταχυπλόου σκάφους",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε πληροφορίες για να εκδώσετε την άδεια χειριστή ταχυπλόου σκάφους.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Υλοποίηση εργασίας εξαμήνου.Το πρότυπο έργο δημιουργήθηκε για τις ανάγκες πτυχιακής εργασίας κατά τη διάρκεια προπτυχιακών σπουδών στο Πανεπιστήμιο Μακεδονίας και τροποποιήθηκε στα πλαίσια παράδοσης εργασίας στο μάθημα Συστήματα Ηλεκτρονικής διακυβέρνησης .:",
      and: "και",
      student1: "Αμπατζίδου Ελισάβετ",
      student2: "Δασύρα Ευμορφία Ελπίδα",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Speedboat Operator License",
      pageTitle: "Speedboat Operator License",
      infoTitle: "Information on Obtaining a Speedboat Operator License",
      subTitle1: "This questionnaire can help you find information on how to obtain a speedboat operator license.",
      subTitle2: "Completing the questionnaire should not take more than 10 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of our thesis at the University of Macedonia and were modified for a project delivery.:",
      and: "and",
      student1: "Ampatzidou Elisavet",
      student2: "Dasyra Evmorfia Elpida",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();
