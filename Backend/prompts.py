input_template = """<human>: Answer the question based only on the following context. If you cannot answer the question with the context, please respond with 'I don't know':
### CONTEXT
{context}
### QUESTION
Question: {question}
\n
<bot>:
"""

question_template = """\
You are a University Professor creating a test for advanced students. For each context, create a question that is specific to the context. Avoid creating generic or general questions.
question: a question about the context.
Format the output as JSON with the following keys:
question
context: {context}
"""

grounud_truth_template = """\
You are a University Professor creating a test for advanced students. For each question and context, create an answer.

answer: a answer about the context.

Format the output as JSON with the following keys:
answer

question: {question}
context: {context}
"""
