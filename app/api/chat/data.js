const projectData = [
  {
    project_id: 1,
    title: "AI Image Classifier",
    description: "A model that classifies images into categories using deep learning.",
    technologies: ["TensorFlow", "Python", "CNN"],
    url: "www.google.com",
    imageUrl: "https://random.imagecdn.app/300/300"
  },
  {
    project_id: 2,
    title: "Weather Forecasting App",
    description: "An application that provides accurate weather forecasts using machine learning.",
    technologies: ["Python", "Flask", "OpenWeatherMap API"],
    url: "www.google.com",
    imageUrl: "https://random.imagecdn.app/300/300"
  },
  {
    project_id: 3,
    title: "Chatbot for Customer Support",
    description: "A chatbot that provides real-time assistance to customers using natural language processing.",
    technologies: ["Node.js", "Dialogflow", "React"],
    url: "www.google.com",
    imageUrl: "https://random.imagecdn.app/300/300"
  },
  {
    project_id: 4,
    title: "E-Commerce Recommendation System",
    description: "A recommendation system that suggests products to users based on their browsing history and preferences.",
    technologies: ["Python", "Scikit-learn", "Collaborative Filtering"],
    url: "www.google.com",
    imageUrl: "https://random.imagecdn.app/300/300"
  },
  {
    project_id: 5,
    title: "Fitness Tracker App",
    description: "A mobile app that tracks user fitness activities and provides health insights using wearable device data.",
    technologies: ["Flutter", "Firebase", "Google Fit API"],
    url: "www.google.com",
    imageUrl: "https://random.imagecdn.app/300/300"
  },
  {
    project_id: 6,
    title: "Stock Market Prediction System",
    description: "An AI-powered system that predicts stock market trends using historical data and sentiment analysis.",
    technologies: ["Python", "Keras", "Pandas"],
    url: "www.google.com",
    imageUrl: "https://random.imagecdn.app/300/300"
  },
  {
    project_id: 7,
    title: "Language Translation API",
    description: "A translation API that provides real-time language translation using neural machine translation models.",
    technologies: ["Node.js", "Google Cloud Translation API", "Express.js"],
    url: "www.google.com",
    imageUrl: "https://random.imagecdn.app/300/300"
  },
];

  
const systemPrompt = `You are a helpful assistant titled Lucy. You have the following projects:
  ${projectData.map((proj) => `Project: ${proj.title} - ${proj.description} (project_id: ${proj.id})`).join("\n")}.
  If a user asks for recommendations, suggest the most relevant projects by their ID. Unless asked don't provide 
  any recommendation. Also do not give anything which is not asked from you. Just do what he user is asking you to. 
  If no project fit the description then tell them that no project fits the description. Always tell project_id : actual integer representing id.
  Always say project_id before mentioning any project information.`;
  
export { projectData, systemPrompt };