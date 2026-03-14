// SpecTa IELTS Content — All lessons, practice questions, mock test
const TUTORS = {
  maya: {
    name:'Dr. Maya', emoji:'👩‍🏫', color:'#1A4FA0', soft:'#E8F1FB', role:'Academic Expert',
    greet:'Hello! I\'m Dr. Maya. I\'ll guide you through each concept systematically with clear explanations and examples. Let\'s build a strong foundation.',
    system:'You are Dr. Maya, a senior IELTS examiner and academic tutor with 15 years of experience. Give structured, thorough explanations. Always cite specific IELTS band descriptors. Use examples from real IELTS passages. Be formal but encouraging. When evaluating writing, give a band estimate and 3 specific improvement points with corrected examples. LESSON CONTEXT: {LESSON}'
  },
  alex: {
    name:'Alex', emoji:'👨‍💼', color:'#E55A4E', soft:'#FEE2E0', role:'Score Booster',
    greet:'Hey! I\'m Alex — your score booster. I\'ll cut straight to what gets you bands. No fluff, just results. Ready to level up?',
    system:'You are Alex, a high-energy IELTS coach focused on rapid score improvement. Be direct and tactical. Use bullet points. Give shortcuts and high-impact strategies. Focus on the 20% of effort that gets 80% of results. When evaluating writing, be honest about band score and give the top 2 quick fixes. LESSON CONTEXT: {LESSON}'
  },
  sari: {
    name:'Sari', emoji:'🧑‍🎓', color:'#7C3AED', soft:'#EDE9FE', role:'Confidence Coach',
    greet:'Hi there! I\'m Sari. I know exams can feel overwhelming, but together we\'ll go at your pace. Every step counts — let\'s make this enjoyable!',
    system:'You are Sari, a warm and patient IELTS confidence coach. Use simple, friendly language. Normalize mistakes as learning opportunities. Celebrate small wins. When a student struggles, acknowledge their feeling first before explaining. When evaluating writing, always start with what they did well, then give gentle suggestions. LESSON CONTEXT: {LESSON}'
  }
};

const LESSONS = {
  reading: [
    {
      id:'r1', title:'The 13 Question Types', badge:'Foundation', dur:'10 min',
      intro:'IELTS Reading has exactly 13 question types. The moment you see a question, you must instantly know which technique to use. Let me show you all 13.',
      points:['Multiple Choice — pick A, B, C or D','True / False / Not Given — 3-way decision','Yes / No / Not Given — for opinions only','Matching Headings — match paragraphs to headings','Matching Information — find which paragraph contains info','Matching Features — match items to a list','Matching Sentence Endings — complete sentences','Summary Completion — fill gaps in a summary','Note Completion — fill in a structured note','Table Completion — complete a table','Flow-chart Completion — complete a process','Diagram Label Completion — label a diagram','Short Answer — answer in a few words'],
      content:`<h5>The 3 Most Important Types (most frequently tested)</h5>
<div class="rule"><strong>1. True / False / Not Given</strong><br>TRUE = the text confirms the statement<br>FALSE = the text directly contradicts it<br>NOT GIVEN = the text does not mention it at all<br><br>⚠️ The #1 mistake: marking "NOT GIVEN" as FALSE because the information <em>could be</em> false. NOT GIVEN means the passage is simply silent on the point.</div>
<div class="rule"><strong>2. Matching Headings</strong><br>Each heading summarises the MAIN IDEA of a paragraph — not a detail. Start with the paragraph that has the clearest topic sentence. Do the hardest ones last.</div>
<div class="rule"><strong>3. Multiple Choice</strong><br>Always check ALL options before choosing. IELTS deliberately includes distractors that are partially true. The correct answer paraphrases the text — it almost never uses the same words.</div>
<h5>Key Strategy for All Question Types</h5>
<div class="tip">✅ Questions follow the ORDER of the text (except Matching Headings). Use this to locate answers quickly — if Q3 is in paragraph 2, Q4 will be in paragraph 2 or later.</div>
<div class="warn">❌ Never spend more than 90 seconds on one question. Mark it, move on, come back. Time is your biggest enemy in IELTS Reading.</div>`
    },
    {
      id:'r2', title:'True / False / Not Given Mastery', badge:'High Value', dur:'12 min',
      intro:'True/False/Not Given is the question type students get wrong most often — even strong readers. The difference between FALSE and NOT GIVEN is extremely subtle.',
      points:['Read the statement carefully — identify the exact claim','Find the relevant part of the passage (scan for keywords)','Compare ONLY what the text says — nothing more','TRUE: passage confirms the claim directly','FALSE: passage directly contradicts the claim','NOT GIVEN: passage doesn\'t mention it at all'],
      content:`<h5>The Critical Distinction: FALSE vs NOT GIVEN</h5>
<div class="example"><strong>Passage says:</strong> "The company was founded in 1995 in London."<br><br><strong>Statement A:</strong> "The company was founded in the 1990s." → <strong>TRUE</strong><br><strong>Statement B:</strong> "The company was founded in New York." → <strong>FALSE</strong> (passage says London)<br><strong>Statement C:</strong> "The company now has offices in 20 countries." → <strong>NOT GIVEN</strong> (passage never mentions this)</div>
<h5>The "Common Sense" Trap</h5>
<div class="warn">❌ If you THINK something must be true based on your own knowledge — but the passage doesn't say it — the answer is NOT GIVEN. Your personal knowledge is irrelevant. Only the text counts.</div>
<h5>Step-by-Step Technique</h5>
<div class="rule">Step 1: Underline the KEY IDEA in the statement (the specific claim being made)<br>Step 2: Scan the passage for those keywords or their synonyms<br>Step 3: Read that sentence AND the sentence before/after<br>Step 4: Ask: "Does the passage directly confirm, directly contradict, or not mention this?"</div>
<div class="tip">✅ Pro tip: If you're stuck between FALSE and NOT GIVEN — it's usually NOT GIVEN. Examiners rarely make FALSE answers obvious. When in doubt, choose NOT GIVEN.</div>`
    },
    {
      id:'r3', title:'Skimming & Scanning Techniques', badge:'Speed Skills', dur:'8 min',
      intro:'Reading every word in IELTS is a trap. You have 60 minutes for 40 questions — that\'s 90 seconds per question. You MUST skim and scan.',
      points:['Skimming = read fast to get the GENERAL idea','Scanning = search for a SPECIFIC piece of information','Never read word-by-word unless answering a specific question','First 25 seconds: skim passage for topic + structure','Then: go question by question, scan for each answer'],
      content:`<h5>Skimming — How to Do It</h5>
<div class="rule">Read ONLY: the title, subtitle, first sentence of each paragraph, last sentence of the passage. This takes 25-30 seconds and gives you 70% of what you need to know about the passage's structure and topic.</div>
<h5>Scanning — How to Do It</h5>
<div class="rule">Look for: CAPITAL LETTERS (names, places), NUMBERS (dates, statistics), UNUSUAL WORDS (technical terms). These are easy to spot without reading full sentences. Let your eyes move down the page like a search engine.</div>
<h5>Paraphrasing — The Hidden Challenge</h5>
<div class="warn">⚠️ Questions almost NEVER use the same words as the passage. "increased significantly" in the passage might appear as "grew substantially" in the question. Always think: what synonyms could this concept have?</div>
<div class="example"><strong>Question word:</strong> "reduce" → Look for: decrease, decline, drop, fall, lower, cut, diminish, shrink<br><strong>Question word:</strong> "important" → Look for: significant, crucial, vital, key, essential, major, critical</div>`
    },
    {
      id:'r4', title:'Matching Headings Strategy', badge:'Technique', dur:'10 min',
      intro:'Matching Headings is tricky because students focus on details instead of main ideas. A heading summarises the paragraph\'s WHOLE point — not just one fact in it.',
      points:['Read the list of headings FIRST — get familiar with all options','Skim paragraph 1 — what is the main point? (first + last sentence)','Match the heading that covers the WHOLE paragraph','Cross out headings you\'ve already used','Leave the hardest paragraphs for last'],
      content:`<h5>What Makes a Good Heading Match</h5>
<div class="rule">A heading must reflect the DOMINANT IDEA — what the whole paragraph is about. If a paragraph has 5 sentences and only sentence 3 matches a heading — that heading is wrong. It must cover all 5 sentences.</div>
<h5>Distractors to Watch For</h5>
<div class="warn">❌ Trap: A heading contains a word that appears in the paragraph — but the paragraph is actually about something else. Always ask: does this heading describe what the WHOLE paragraph does?</div>
<div class="example"><strong>Paragraph about:</strong> Why scientists changed their opinion about coffee's health effects<br><strong>Correct heading:</strong> "A revision of earlier scientific conclusions" ✅<br><strong>Wrong heading (trap):</strong> "The history of coffee research" ❌ — the paragraph isn't about history</div>
<div class="tip">✅ Topic sentences are your best friend. 80% of the time, the main idea is in the first sentence. If not — check the last sentence. The middle is usually supporting detail.</div>`
    }
  ],

  writing: [
    {
      id:'w1', title:'Task 2 Essay Types — The 5 Structures', badge:'High Value', dur:'15 min',
      intro:'IELTS Writing Task 2 always uses one of 5 essay structures. Identify the type in 30 seconds and you already know exactly how to organise your essay.',
      points:['Opinion Essay — "Do you agree or disagree?"','Discussion Essay — "Discuss both views and give your opinion"','Problem/Cause & Solution Essay — "What are the causes? What solutions?"','Advantages & Disadvantages — "Do advantages outweigh disadvantages?"','Two-Part Question — Two separate questions to answer'],
      content:`<h5>How to Identify the Essay Type</h5>
<div class="rule"><strong>Opinion Essay:</strong> Contains "To what extent do you agree or disagree?" → Give YOUR view clearly in introduction and conclusion. Don't sit on the fence.<br><br><strong>Discussion Essay:</strong> Contains "Discuss both views" or "Some people think X, others think Y" → Cover BOTH sides, then give your view.<br><br><strong>Problem/Solution:</strong> Contains "What are the causes?" or "What solutions?" → Paragraph 1 = problems/causes, Paragraph 2 = solutions<br><br><strong>Advantages/Disadvantages:</strong> Contains "outweigh" → Paragraph 1 = advantages, Paragraph 2 = disadvantages, then judge which is stronger.<br><br><strong>Two-Part:</strong> Ends with TWO question marks → One paragraph for each question.</div>
<h5>Band 7+ Opinion Essay Template</h5>
<div class="example"><strong>Introduction (3 sentences):</strong><br>1. Paraphrase the topic (never copy the question)<br>2. State YOUR position clearly ("I firmly believe that...")<br>3. Preview your 2 main reasons<br><br><strong>Body 1:</strong> First reason + specific example + explanation<br><strong>Body 2:</strong> Second reason + specific example + explanation<br>(Optional) <strong>Body 3:</strong> Acknowledge opposing view + refute it<br><br><strong>Conclusion:</strong> Restate position + summarise (never add new ideas)</div>
<div class="tip">✅ Word count: 250-290 words is ideal for Task 2. Under 250 = automatic band penalty. Over 300 = wastes time and increases grammar errors.</div>`
    },
    {
      id:'w2', title:'Task 1 — Describing Charts & Graphs', badge:'Academic', dur:'12 min',
      intro:'Task 1 asks you to DESCRIBE data — not explain why it happened. Your job is to report what you see, select the most significant features, and write an Overview.',
      points:['Introduction: paraphrase the title (never copy it)','Overview: state the MOST SIGNIFICANT trends (2-3 points, no numbers)','Body 1: describe the highest/main data with specific figures','Body 2: describe comparisons, exceptions, or interesting trends','Always include an Overview — this is what separates Band 6 from Band 7'],
      content:`<h5>The Overview — Your Most Important Paragraph</h5>
<div class="rule">The Overview is a 2-sentence paragraph that states the BIGGEST trends WITHOUT numbers. It goes after the introduction, before the body paragraphs. Many students skip it — and lose their Band 7.<br><br><strong>Example:</strong> "Overall, it is clear that [Country A] consistently produced the most [product] throughout the period, while [Country C] showed the most significant growth."</div>
<h5>Essential Vocabulary for Trends</h5>
<div class="example"><strong>Going UP:</strong> rose, increased, grew, climbed, surged, soared, jumped<br><strong>Going DOWN:</strong> fell, decreased, declined, dropped, plummeted, dipped<br><strong>Staying the same:</strong> remained stable, plateaued, stayed constant, levelled off<br><strong>Going up then down:</strong> peaked at, reached a high of, hit a maximum of<br><strong>Going down then up:</strong> bottomed out at, reached a low of<br><br><strong>Adverbs (add these for Band 6+):</strong> sharply, dramatically, significantly, gradually, slightly, marginally, steadily</div>
<div class="warn">❌ Never write "The chart shows..." as your introduction — that's copying the prompt. Paraphrase: "The bar chart illustrates / compares / presents data regarding..."</div>`
    },
    {
      id:'w3', title:'Band 7+ Vocabulary & Coherence', badge:'Score Boost', dur:'10 min',
      intro:'Lexical Resource and Coherence together make up 50% of your Writing score. These are learnable skills — they\'re not about being "naturally good at English".',
      points:['Use a range of vocabulary — avoid repeating the same word twice','Collocations matter more than rare vocabulary','Linking words must be used correctly — not randomly','Each paragraph must have ONE clear main idea','Every sentence must logically follow the previous one'],
      content:`<h5>High-Impact Collocations (use these in essays)</h5>
<div class="example"><strong>Instead of "big problem":</strong> a pressing issue, a growing concern, a significant challenge<br><strong>Instead of "many people":</strong> a considerable proportion of the population, a significant number of individuals<br><strong>Instead of "good for society":</strong> beneficial to society, advantageous for the wider community<br><strong>Instead of "bad effect":</strong> a detrimental impact, adverse consequences, a negative repercussion</div>
<h5>Linking Words — Common Mistakes</h5>
<div class="warn">❌ "Moreover" does NOT mean "but". It means "and also — this is another additional point". Using it to introduce a contrast is a coherence error that costs bands.<br><br>❌ Starting every sentence with "Furthermore, Additionally, Moreover..." looks mechanical and actually LOWERS your Coherence score. Vary your sentence structure.</div>
<div class="rule"><strong>Addition:</strong> Furthermore, Moreover, In addition, Additionally, What is more<br><strong>Contrast:</strong> However, Nevertheless, On the other hand, In contrast, Despite this<br><strong>Cause/Effect:</strong> Therefore, Consequently, As a result, This leads to, Hence<br><strong>Example:</strong> For instance, For example, To illustrate, Such as, Namely<br><strong>Conclusion:</strong> In conclusion, To conclude, Overall, In summary, To summarise</div>`
    },
    {
      id:'w4', title:'Task 2 — Writing Body Paragraphs', badge:'Structure', dur:'12 min',
      intro:'A Band 7 body paragraph follows a clear structure: POINT → EXPLAIN → EXAMPLE → LINK BACK. Most students write a point and jump straight to the next one — missing the explanation that earns marks.',
      points:['POINT: State your main argument in one sentence (the topic sentence)','EXPLAIN: Explain WHY this is true (2-3 sentences)','EXAMPLE: Give a specific example (can be hypothetical)','LINK: Briefly connect back to the essay question'],
      content:`<h5>The PEEL Structure in Action</h5>
<div class="example"><strong>Essay question:</strong> "To what extent do you agree that technology has made people less sociable?"<br><br><strong>POINT:</strong> Technology has undoubtedly diminished the quality of face-to-face social interactions for many individuals.<br><br><strong>EXPLAIN:</strong> When people are constantly engaged with their smartphones during social gatherings, they are physically present but mentally absent. This reduces the depth of conversation and weakens interpersonal bonds that are essential for emotional wellbeing.<br><br><strong>EXAMPLE:</strong> Research conducted in the United States found that the majority of young adults admitted to checking their phones during meals with family, suggesting a widespread shift in social priorities.<br><br><strong>LINK:</strong> This indicates that while technology connects people across distances, it simultaneously creates distance between those in the same room.</div>
<div class="tip">✅ Your example does NOT have to be a real statistic. Phrases like "Studies suggest...", "Research indicates...", "It has been observed that..." signal academic writing even when the example is hypothetical. IELTS does not fact-check examples.</div>`
    }
  ],

  listening: [
    {
      id:'l1', title:'The 4 Sections — What to Expect', badge:'Overview', dur:'8 min',
      intro:'IELTS Listening has 4 sections that get progressively harder. Knowing exactly what\'s in each section means no surprises on exam day.',
      points:['Section 1: Conversation — everyday social context (booking, enquiry)','Section 2: Monologue — everyday social context (tour, announcement)','Section 3: Conversation — academic or training context (2-4 speakers)','Section 4: Monologue — academic lecture or talk (hardest)','Questions ALWAYS follow the order of the recording'],
      content:`<h5>Section by Section Strategy</h5>
<div class="rule"><strong>Section 1 (Questions 1-10):</strong> Easiest. Usually a phone call or booking. Expect names, numbers, dates, addresses. Spelling will be tested. Focus: don't miss spelled names.<br><br><strong>Section 2 (Questions 11-20):</strong> A speech or announcement. Often includes a map or diagram to label. Focus: spatial language ("turn left", "opposite the", "next to").<br><br><strong>Section 3 (Questions 21-30):</strong> Academic discussion — often students planning an assignment or discussing research. Opinions and reasons are tested. Focus: who says what.<br><br><strong>Section 4 (Questions 31-40):</strong> Academic lecture. Dense information, complex vocabulary. NO pause in the middle. Focus: note-taking speed, predicting from keywords.</div>
<h5>The Most Important Rule</h5>
<div class="warn">⚠️ You hear the recording ONCE ONLY. Unlike reading, you cannot go back. Use the reading time (30 seconds before each section) to predict what type of answer is needed: a number? a name? a place? Predicting saves you from being caught off-guard.</div>`
    },
    {
      id:'l2', title:'Prediction Strategy — Before You Listen', badge:'Key Skill', dur:'10 min',
      intro:'The 30 seconds you get to read questions before each section is GOLD. Students who don\'t use it are throwing away marks. Here\'s exactly how to use that time.',
      points:['Read ALL questions for the section before audio starts','For each gap, predict: what TYPE of word goes here? (noun? number? adjective?)','Look at the context around each gap for clues','If you see "Name:" → expect spelling out of a name','If you see "£ ___" → expect a price, number','Underline the keywords in each question'],
      content:`<h5>Predicting Answer Types</h5>
<div class="example"><strong>Gap: "Depart from: _________ station"</strong><br>→ Prediction: A place name (proper noun, probably spelled out)<br><br><strong>Gap: "Number of rooms: _________"</strong><br>→ Prediction: A number between 1-100 probably<br><br><strong>Gap: "The main disadvantage of the system is its _________"</strong><br>→ Prediction: A noun or adjective (problem, cost, complexity, unreliability...)<br><br><strong>Gap: "Recommended temperature: _________ degrees"</strong><br>→ Prediction: A number</div>
<h5>Staying on Track During the Audio</h5>
<div class="rule">If you miss an answer — write your best guess and MOVE ON immediately. Do not pause mentally to think about what you missed. The recording keeps going and you'll miss the next answer too. An educated guess is better than a blank.</div>
<div class="tip">✅ Answers often come immediately AFTER a signpost phrase: "The important thing to remember is...", "What you need to bring is...", "The deadline is...". Listen for these signals.</div>`
    },
    {
      id:'l3', title:'Note Completion & Common Traps', badge:'Technique', dur:'8 min',
      intro:'Note and form completion questions have hidden traps that catch students who aren\'t prepared. Knowing these traps in advance is worth half a band.',
      points:['Word limit: NEVER exceed it ("no more than TWO words" = maximum 2)','Articles count as words! "a university" = 2 words if limit is 2','Numbers can be written as digits OR words — both accepted','Spelling must be exact — no half marks for near-misses','Plural vs singular matters — check the gap context'],
      content:`<h5>The Word Limit Trap</h5>
<div class="warn">⚠️ "Write NO MORE THAN TWO WORDS AND/OR A NUMBER"<br>If the answer is "large lecture theatre" — that's 3 words, so it's WRONG even if you heard it correctly. The correct answer would be "lecture theatre" (2 words).<br><br>Always write the minimum words needed. If you can drop "the" or "a" without losing meaning — drop them.</div>
<h5>Spelling in IELTS</h5>
<div class="rule">British vs American spelling: BOTH are accepted<br>(colour/color ✅, analyse/analyze ✅)<br><br>But completely wrong spelling = wrong answer:<br>"recieve" for "receive" = 0 marks<br>"occured" for "occurred" = 0 marks<br><br>Practice spelling these commonly tested words: accommodation, necessary, environment, government, development, approximately, particularly, immediately</div>
<div class="example"><strong>Numbers traps:</strong><br>"14th of October" → write: 14 October OR 14th October ✅<br>"It costs forty-five pounds" → write: 45 OR £45 OR forty-five ✅<br>"The code is 4-5-7-2" → write: 4572 ✅</div>`
    }
  ],

  speaking: [
    {
      id:'s1', title:'Part 1 — Personal Questions', badge:'Overview', dur:'8 min',
      intro:'Part 1 lasts 4-5 minutes. The examiner asks about familiar topics: your home, work/study, hobbies, family, food. These are NOT deep questions — but most students answer them too briefly.',
      points:['Answer in 2-4 sentences — not 1 word, not a full paragraph','Extend naturally: answer → reason → example OR feeling','Use varied vocabulary — don\'t repeat the same words','Speak at natural pace — slightly slower than your normal speed is fine','Smile! Confidence affects your fluency rating'],
      content:`<h5>The Extend Formula for Part 1</h5>
<div class="rule"><strong>Question:</strong> "Do you enjoy cooking?"<br><br><strong>Band 4 answer (too short):</strong> "Yes, I like cooking."<br><br><strong>Band 6 answer:</strong> "Yes, I enjoy cooking. I especially like making traditional Indonesian food. It relaxes me after a long day."<br><br><strong>Band 7 answer:</strong> "Absolutely — it's something I find genuinely therapeutic. I particularly enjoy experimenting with local spices to recreate traditional recipes. There's a real sense of achievement when a dish turns out just right."</div>
<h5>Common Part 1 Topics</h5>
<div class="example"><strong>Topics you WILL get:</strong><br>🏠 Your home/accommodation<br>👨‍👩‍👧 Family<br>📚 Study or work<br>🎵 Music, films, sports (hobbies)<br>🌳 Nature, weather, outdoor activities<br>📱 Technology, social media<br>🚗 Transport<br>🎂 Birthdays, celebrations<br><br><strong>Prepare 2-3 sentences for each topic.</strong> You're not memorising answers — you're having material ready to extend with.</div>
<div class="tip">✅ If you don't understand a question — say "Could you repeat that, please?" or "Sorry, could you rephrase that?" This is NOT penalised. Answering the wrong question IS penalised.</div>`
    },
    {
      id:'s2', title:'Part 2 — The Cue Card (2-Minute Talk)', badge:'High Value', dur:'12 min',
      intro:'Part 2 is your longest speaking turn. You get 1 minute to prepare, then speak for 1-2 minutes. Most students run out of things to say at 45 seconds. Here\'s how to speak for 2 minutes confidently.',
      points:['Use the 1-minute prep time to write 4-6 keyword bullet points','Follow the bullet points on the card — they are your structure','Start with a clear opening sentence: "I\'d like to talk about..."','Use past tense for a memory, present for a habit, future for something planned','Add sensory details: what you saw, heard, felt, smelled — this adds time naturally'],
      content:`<h5>Sample Cue Card + Model Answer Framework</h5>
<div class="example"><strong>Cue Card:</strong> "Describe a time you learned something new. You should say: what you learned, when you learned it, how you learned it, and explain why it was important to you."<br><br><strong>Framework (write these keywords in your prep minute):</strong><br>1. WHAT: swimming / 3 years ago<br>2. WHEN + WHERE: community pool, Jakarta<br>3. HOW: group lessons, patient instructor<br>4. FEELINGS: nervous at first → proud<br>5. WHY IMPORTANT: confidence, fitness, safety</div>
<div class="rule"><strong>Time Management:</strong><br>Sentence 1 (0:00-0:10): Opening — "I'd like to describe the time I learned to swim..."<br>Point 1 — WHAT (0:10-0:30): Explain the topic with details<br>Point 2 — WHEN/WHERE (0:30-0:55): Set the scene, add sensory details<br>Point 3 — HOW (0:55-1:25): The main part — most detail here<br>Point 4 — WHY (1:25-1:50): Feelings and significance<br>Wrap up (1:50-2:00): "Overall, this experience really..."</div>
<div class="tip">✅ If you run dry before 2 minutes: add comparisons ("Unlike before, now I..."), add feelings ("At the time I felt..."), or add hypotheticals ("If I hadn't done this, I think I would...")</div>`
    },
    {
      id:'s3', title:'Part 3 — Abstract Discussion', badge:'Band 7+', dur:'10 min',
      intro:'Part 3 is where Band 7+ is earned. The examiner asks abstract questions about society, trends, and issues. They WANT you to discuss — not just answer briefly. Extended discussion = higher fluency band.',
      points:['Part 3 questions are about society — not just yourself','Give opinions clearly: "I strongly believe...", "It seems to me that..."','Structure your answer: opinion → reason → example → acknowledge other view','When you don\'t know — speculate: "I\'d imagine that...", "I suppose it depends on..."','Discuss, don\'t lecture — use hedging language to sound natural'],
      content:`<h5>Extending Your Part 3 Answers</h5>
<div class="example"><strong>Question:</strong> "Do you think technology has changed the way people communicate?"<br><br><strong>Band 5 answer:</strong> "Yes, technology has changed communication a lot. People use phones and social media now."<br><br><strong>Band 7 answer:</strong> "Undeniably so. I think the most significant shift has been from synchronous to asynchronous communication — people no longer need to be available at the same time to have a conversation. While this offers tremendous flexibility, it does arguably reduce the emotional depth of exchanges. I suppose it depends on how technology is used — video calls, for instance, can actually deepen connections across distances."</div>
<h5>Useful Part 3 Language</h5>
<div class="rule"><strong>Giving opinions:</strong> I strongly believe... / In my view... / It seems to me that... / I'd argue that...<br><br><strong>Hedging (for uncertain ideas):</strong> I imagine... / I suppose... / It's possible that... / It could be argued...<br><br><strong>Acknowledging other views:</strong> Having said that... / On the other hand... / Some might argue... / There are those who believe...<br><br><strong>Buying thinking time:</strong> That's an interesting question... / Well, it's quite complex... / Let me think about that...</div>`
    },
    {
      id:'s4', title:'Pronunciation & Fluency Tips', badge:'Score Boost', dur:'8 min',
      intro:'Pronunciation is NOT about having a British or American accent. IELTS tests whether you can be understood clearly and whether you use stress and intonation effectively.',
      points:['Word stress: em-PHAS-is on the right syl-LA-ble matters','Sentence stress: content words (nouns, verbs, adjectives) are stressed','Connected speech: "want to" sounds like "wanna" naturally — that\'s fine','Intonation: rising pitch for questions, falling for statements','Pausing: short pauses between clauses sound confident, not hesitant'],
      content:`<h5>Word Stress — Common Mistakes</h5>
<div class="example"><strong>Academic vocabulary you must stress correctly:</strong><br>de-VEL-op-ment (not DEV-elop-ment)<br>en-VI-ron-ment (not en-vi-RON-ment)<br>sig-NIF-i-cant (not SIG-nif-i-cant)<br>par-TIC-u-lar-ly (not par-tic-U-lar-ly)<br>o-POR-tu-ni-ty (not op-por-TU-ni-ty)</div>
<h5>Fluency vs. Accuracy</h5>
<div class="rule">Fluency (speaking smoothly) is worth more than perfect grammar in the speaking test. A few grammar errors made while speaking fluently scores higher than perfectly grammatical but hesitant speech.<br><br>Use natural "fillers" to maintain fluency when thinking:<br>✅ "Well..." / "You know..." / "I mean..." / "Actually..." / "It's kind of..."<br><br>These sound natural in speech. Use them sparingly — they show fluency, not lack of knowledge.</div>
<div class="tip">✅ The most powerful fluency technique: speak in phrases/chunks, not word-by-word. "I-really-enjoy" should flow as one unit, not three separate words with gaps between them.</div>`
    }
  ],

  tips: [
    {
      id:'t1', title:'IELTS Band Descriptors Explained', badge:'Must Know', dur:'6 min',
      intro:'IELTS marks you on 4 criteria — each worth 25%. Understanding exactly what examiners look for helps you know exactly where to improve.',
      points:['Task Achievement/Response — did you fully answer the question?','Coherence & Cohesion — is it organised and logically connected?','Lexical Resource — quality and range of vocabulary','Grammatical Range & Accuracy — variety and correctness of grammar'],
      content:`<h5>The 4 Criteria — What Each Means</h5>
<div class="rule"><strong>Task Achievement (Writing Task 2):</strong><br>Band 6: addresses the task but incompletely. Some ideas not fully developed.<br>Band 7: addresses all parts. Position is clear throughout. Main ideas are extended and supported.<br>Band 8: covers the task fully. Ideas are well-developed with relevant examples.</div>
<div class="rule"><strong>Coherence & Cohesion:</strong><br>Band 6: uses cohesive devices but sometimes incorrectly. Organisation is generally logical.<br>Band 7: logically organised. Progression is clear. Linking used flexibly (not mechanically).<br>Band 8: seamless flow. Paragraphing used well. Cohesion is hardly noticeable (it just flows).</div>
<div class="rule"><strong>Lexical Resource:</strong><br>Band 6: adequate range. Some errors in word choice but meaning is clear.<br>Band 7: uses less common vocabulary naturally. Occasional inaccuracies in word choice/collocation.<br>Band 8: wide range used with natural control. Rare errors only.</div>
<div class="rule"><strong>Grammatical Range & Accuracy:</strong><br>Band 6: mix of simple and complex sentences. Errors present but meaning is clear.<br>Band 7: variety of complex structures. Most sentences are accurate. Occasional errors.<br>Band 8: wide range of structures. Majority error-free. Errors only in rare or complex constructions.</div>`
    },
    {
      id:'t2', title:'Top 10 Exam Day Strategies', badge:'Essential', dur:'6 min',
      intro:'These 10 strategies come from analysing thousands of IELTS results. Many students know the language but lose bands from avoidable exam mistakes.',
      points:['Transfer answers carefully — 10 minutes given at end of listening','Always answer every question — no penalty for wrong guesses','Check word limits on every listening/reading answer','Write legibly — unclear handwriting can cost marks','Budget time: Reading = 20 min per passage max'],
      content:`<h5>The 10 Strategies</h5>
<div class="rule"><strong>Listening:</strong><br>1. Use ALL reading time before each section to predict answers<br>2. If you miss an answer — move on IMMEDIATELY, write a guess later<br>3. Check spelling when transferring to answer sheet<br>4. Watch for number changes ("45" then "no wait, 54")</div>
<div class="rule"><strong>Reading:</strong><br>5. Skim the passage (90 seconds) before reading questions<br>6. Don't spend more than 90 seconds per question<br>7. For True/False/NG — trust the text, not your knowledge</div>
<div class="rule"><strong>Writing:</strong><br>8. Task 1: Always write an Overview paragraph (separates Band 6 from Band 7)<br>9. Task 2: Plan for 5 minutes before writing — structure saves time overall<br>10. Leave 3-5 minutes to check: subject-verb agreement, articles, plurals</div>
<div class="tip">✅ The most underused strategy: For writing, read your essay backwards — last sentence first. This forces you to see individual sentences instead of your intended meaning, making errors easier to spot.</div>`
    }
  ]
};

// MOCK TEST — Real IELTS-style Academic Reading Passage
const MOCK_TEST = {
  title: 'IELTS Academic Reading — Practice Test',
  time: 20,
  passage: `<strong>The Science of Sleep and Memory</strong>

Sleep has long been considered essential for physical restoration, but research over the past two decades has dramatically expanded our understanding of its role in cognitive function, particularly memory consolidation. Scientists now believe that the sleeping brain is far from inactive — it is engaged in a complex series of processes that are critical for learning.

During sleep, the brain cycles through two main phases: REM (Rapid Eye Movement) sleep and non-REM sleep, which is further divided into three stages. Non-REM stage 3, known as slow-wave sleep or deep sleep, is when the brain consolidates declarative memories — those involving facts and events. During this stage, the hippocampus, a brain region central to memory formation, replays the day's experiences and transfers them to the neocortex for long-term storage. REM sleep, by contrast, plays a crucial role in procedural memory — skills and habits — as well as emotional memory processing.

A landmark study by German researcher Jan Born in 2004 demonstrated that students who slept after learning a mathematical formula were twice as likely to discover a hidden shortcut in the problem compared to those who remained awake. This finding suggested that sleep does not merely preserve memories but actively reorganises and analyses them, potentially leading to creative insights.

The impact of sleep deprivation on memory is equally significant. Research from the University of California found that adults who slept fewer than six hours per night for two weeks performed as poorly on cognitive tests as those who had been kept awake for 48 hours straight — yet crucially, the sleep-deprived group did not perceive themselves as significantly impaired. This disconnect between actual and perceived performance has serious implications for students who believe they can study effectively on minimal sleep.

Modern neuroscience has also examined the role of sleep in emotional memory. Disturbing or emotionally charged memories are believed to be processed during REM sleep, during which the neurochemical norepinephrine — associated with stress — is suppressed. This creates a neurochemical environment that allows the emotional content of memories to be processed without the accompanying distress, a theory known as the "sleep to forget, sleep to remember" hypothesis.

The practical implications of this research are substantial. Educational institutions that have shifted their start times later have reported improved academic performance and reduced rates of depression among students. Sleep researchers now broadly advocate for treating adequate sleep not as a luxury but as a fundamental component of effective learning strategies.`,
  questions: [
    { type:'tfng', q:'Slow-wave sleep occurs in the REM phase of the sleep cycle.', ans:'FALSE', explain:'The passage states slow-wave sleep (deep sleep) is non-REM stage 3, not REM phase.' },
    { type:'tfng', q:'The hippocampus is involved in transferring memories to long-term storage.', ans:'TRUE', explain:'The passage directly states the hippocampus "replays experiences and transfers them to the neocortex for long-term storage".' },
    { type:'tfng', q:'Jan Born\'s 2004 study involved participants learning a foreign language.', ans:'FALSE', explain:'The study used a mathematical formula, not a foreign language.' },
    { type:'tfng', q:'Sleep-deprived individuals accurately assessed how impaired they were.', ans:'FALSE', explain:'The passage says the sleep-deprived group "did not perceive themselves as significantly impaired" — they were wrong about their own performance.' },
    { type:'tfng', q:'The "sleep to forget, sleep to remember" hypothesis involves a specific brain chemical.', ans:'TRUE', explain:'The passage mentions norepinephrine is suppressed during REM sleep, which is central to this hypothesis.' },
    { type:'mcq', q:'According to the passage, what was the key finding of Jan Born\'s 2004 study?', opts:['Students who slept learned formulas more quickly','Sleeping students were twice as likely to find a problem shortcut','Sleep helps students memorise facts better than skills','REM sleep is more important than deep sleep for maths'], ans:1, explain:'"Students who slept...were twice as likely to discover a hidden shortcut" — the finding was about insight and reorganisation, not just memorisation.' },
    { type:'mcq', q:'What does the research from the University of California primarily reveal?', opts:['Six hours of sleep is sufficient for most adults','People can accurately judge their own cognitive impairment','Sleep deprivation impairs performance even when people feel fine','Students should sleep more than eight hours before exams'], ans:2, explain:'The key finding was the "disconnect between actual and perceived performance" — people were impaired without knowing it.' },
    { type:'mcq', q:'Why is norepinephrine suppression during REM sleep significant?', opts:['It makes emotional memories stronger','It allows emotional memories to be processed without stress','It prevents nightmares from forming','It helps transfer memories to the hippocampus'], ans:1, explain:'The passage explains this suppression "allows emotional content to be processed without the accompanying distress".' },
    { type:'short', q:'What are the TWO main phases of sleep mentioned in the passage?', ans:'REM and non-REM', explain:'The passage states: "the brain cycles through two main phases: REM (Rapid Eye Movement) sleep and non-REM sleep".' },
    { type:'short', q:'What type of memory is primarily consolidated during slow-wave sleep?', ans:'declarative', explain:'The passage states: "slow-wave sleep is when the brain consolidates declarative memories — those involving facts and events".' }
  ]
};
