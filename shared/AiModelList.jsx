export default [
  {
    model: "GPT",
    icon: "/ChatGPT.svg",
    premium: true,
    invert: true,
    enable: true,
    subModel: [
      { name: "GPT 3.5", premium: false, id: "gpt-3.5" },
      { name: "GPT 3.5 Turbo", premium: false, id: "gpt-3.5-turbo" },
      { name: "GPT 4.1 Mini", premium: false, id: "gpt-4.1-mini" },
      { name: "GPT 4.1", premium: true, id: "gpt-4.1" },
      { name: "GPT 5 Nano", premium: false, id: "gpt-5-nano" },
      { name: "GPT 5 Mini", premium: false, id: "gpt-5-mini" },
      { name: "GPT 5", premium: true, id: "gpt-5" },
    ],
  },
  {
    model: "Gemini",
    icon: "/Gemini.svg",
    premium: false,
    enable: true,
    subModel: [
      { name: "Gemini 2.5 Lite", premium: false, id: "gemini-2.5-flash-lite" },
      { name: "Gemini 2.5 Flash", premium: false, id: "gemini-2.5-flash" },
      { name: "Gemini 2.5 Pro", premium: true, id: "Gemini 2.5 Pro" },
    ],
  },
  {
    model: "DeepSeek",
    icon: "/DeepSeek.svg",
    premium: true,
    enable: true,
    subModel: [
      { name: "DeepSeek R1", premium: false, id: "DeepSeek-R1" },
      { name: "DeepSeek R1 0528", premium: true, id: "DeepSeek-R1-0528" },
    ],
  },
  {
    model: "Mistral",
    icon: "/Mistral.svg",
    premium: true,
    enable: true,
    subModel: [
      { name: "Mistral Medium 2505", premium: true, id: "mistral-medium-2505" },
      { name: "Ministral 3B", premium: false, id: "Ministral-3B" },
    ],
  },
  {
    model: "Grok",
    icon: "/Grok.svg",
    premium: true,
    invert: true,
    enable: true,
    subModel: [
      { name: "Grok 3 Mini", premium: false, id: "grok-3-mini" },
      { name: "Grok 3", premium: true, id: "grok-3" },
    ],
  },
  {
    model: "Cohere",
    icon: "/Cohere.svg",
    premium: false,
    enable: true,
    subModel: [
      { name: "Cohere Command A", premium: false, id: "cohere-command-a" },
      { name: "Cohere Command R 08-2024", premium: false, id: "Cohere-command-r-08-2024" },
    ],
  },
  {
    model: "Perplexity",
    icon: "/Perplexity.svg", 
    premium: true,
    enable: true,
    subModel: [
      { name: "Sonar Deep Research", premium: true, id: "sonar-deep-research" },
      { name: "Sonar Reasoning", premium: true, id: "sonar-reasoning" },
      { name: "Sonar Pro", premium: true, id: "sonar-pro" },
      { name: "Sonar", premium: false, id: "sonar" },
    ],
  },
  {
    model: "Anthropic",
    icon: "/Claude.svg", 
    premium: true,
    enable: true,
    subModel: [
      { name: "Claude 3.7 Sonnet", premium: true, id: "claude-3.7-sonnet" },
      { name: "Claude 3.5 Sonnet", premium: false, id: "claude-3.5-sonnet" },
      { name: "Claude 3.5 Haiku", premium: false, id: "claude-3.5-haiku" },
    ],
  },
  {
    model: "Llama",
    icon: "/Meta.svg", 
    premium: true,
    enable: true,
    subModel: [
      { name: "Llama 3.3 70B Instruct", premium: true, id: "Llama-3.3-70B-Instruct" },
      { name: "Llama 4 Scout 17B 16E Instruct", premium: true, id: "Llama-4-Scout-17B-16E-Instruct" },
    ],
  },
];