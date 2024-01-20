from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from pydantic import BaseModel
from models import RankResult
from prompt_evaluation import *
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)


class RankBase(BaseModel):
    id: int
    name: str
    rating: float


@app.get("/ranks/", response_model=List[RankBase])
async def return_rank(prompt: str):
    results = evaluate_prompt(prompt)
    return results
