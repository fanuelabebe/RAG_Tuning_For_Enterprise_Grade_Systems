import random
from prompts import *
from models import RankResult
from typing import Annotated, List


def monte_carlo_eval(prompt):
    # Simulating different types of responses
    response_types = ["highly relevant", "somewhat relevant", "irrelevant"]
    scores = {"highly relevant": 3, "somewhat relevant": 2, "irrelevant": 1}

    # Perform multiple random trials
    trials = 100
    total_score = 0
    for _ in range(trials):
        response = random.choice(response_types)
        total_score += scores[response]

    # Average score represents the evaluation
    return total_score / trials


def elo_eval(prompt, base_rating=1500):
    # Simulate the outcome of the prompt against standard criteria
    # Here, we randomly decide if the prompt 'wins', 'loses', or 'draws'
    outcomes = ["win", "loss", "draw"]
    outcome = random.choice(outcomes)

    # Elo rating formula parameters
    K = 30  # Maximum change in rating
    R_base = 10 ** (base_rating / 400)
    R_opponent = 10 ** (1600 / 400)  # Assuming a fixed opponent rating
    expected_score = R_base / (R_base + R_opponent)

    # Calculate the new rating based on the outcome
    actual_score = {"win": 1, "loss": 0, "draw": 0.5}[outcome]
    new_rating = base_rating + K * (actual_score - expected_score)

    return new_rating


def evaluate_prompt(prompt) -> List[RankResult]:
    motecarlo_result = monte_carlo_eval(prompt)
    elo_result = elo_eval(prompt)
    result_pair = [
        RankResult(1, "MonteCarlo", motecarlo_result),
        RankResult(1, "Elo Rank", elo_result),
    ]
    return result_pair
