from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from pydantic import BaseModel
import models
from fastapi.middleware.cors import CORSMiddleware
