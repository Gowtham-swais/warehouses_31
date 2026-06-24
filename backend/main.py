from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import (
    WHChallenges,
    WHDataSources,
    WHPredictions,
    WHSimulations,
    WHKPIMetrics
)

app = FastAPI(title="Warehouse Digital Twin Simulation API")
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def convert_to_dict(rows):
    return [
        {
            column.name: getattr(row, column.name)
            for column in row.__table__.columns
        }
        for row in rows
    ]


@app.get("/")
def home():
    return {"message": "Warehouse Digital Twin API Running"}


@app.get("/warehouse/challenges")
def get_challenges(db: Session = Depends(get_db)):
    try:
        data = db.query(WHChallenges).all()
        return convert_to_dict(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/warehouse/data-sources")
def get_data_sources(db: Session = Depends(get_db)):
    try:
        data = db.query(WHDataSources).all()
        return convert_to_dict(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/warehouse/predictions")
def get_predictions(db: Session = Depends(get_db)):
    try:
        data = db.query(WHPredictions).all()
        return convert_to_dict(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/warehouse/simulations")
def get_simulations(db: Session = Depends(get_db)):
    try:
        data = db.query(WHSimulations).all()
        return convert_to_dict(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/warehouse/kpi-metrics")
def get_kpi_metrics(db: Session = Depends(get_db)):
    try:
        data = db.query(WHKPIMetrics).all()
        return convert_to_dict(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/dashboard/kpi")
def get_dashboard_kpi(db: Session = Depends(get_db)):
    try:
        challenges = db.query(WHChallenges).count()
        data_sources = db.query(WHDataSources).count()
        predictions = db.query(WHPredictions).count()
        simulations = db.query(WHSimulations).count()
        kpi_metrics = db.query(WHKPIMetrics).count()

        return {
            "total_challenges": challenges,
            "total_data_sources": data_sources,
            "total_predictions": predictions,
            "total_simulations": simulations,
            "total_kpi_metrics": kpi_metrics
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    