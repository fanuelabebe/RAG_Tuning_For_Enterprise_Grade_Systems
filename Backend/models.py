class PromptResult:
    def __init__(
        self,
        id,
        question,
        answer,
        contexts,
        ground_truths,
        context_precision,
        context_recall,
        faithfulness,
        answer_relevancy,
    ) -> None:
        self.id = id
        self.question = question
        self.answer = answer
        self.contexts = contexts
        self.ground_truths = ground_truths
        self.context_precision = context_precision
        self.context_recall = context_recall
        self.faithfulness = faithfulness
        self.answer_relevancy = answer_relevancy
        pass
