from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base


class WHChallenges(Base):
    __tablename__ = "wh_challenges"

    id = Column(Integer, primary_key=True, index=True)
    challenge_name = Column(String)
    description = Column(String)
    business_objective = Column(String)
    target_metric = Column(String)


class WHDataSources(Base):
    __tablename__ = "wh_data_sources"

    id = Column(Integer, primary_key=True, index=True)
    source_name = Column(String)
    source_type = Column(String)
    description = Column(String)
    refresh_frequency = Column(String)


class WHPredictions(Base):
    __tablename__ = "wh_predictions"

    id = Column(Integer, primary_key=True, index=True)
    prediction_type = Column(String)
    predicted_value = Column(Float)
    confidence_score = Column(Float)
    recommendation = Column(String)


class WHSimulations(Base):
    __tablename__ = "wh_simulations"

    id = Column(Integer, primary_key=True, index=True)
    simulation_name = Column(String)
    scenario = Column(String)
    expected_outcome = Column(String)
    impact_score = Column(Float)


class WHKPIMetrics(Base):
    __tablename__ = "wh_kpi_metrics"

    id = Column(Integer, primary_key=True, index=True)
    kpi_name = Column(String)
    current_value = Column(Float)
    target_value = Column(Float)
    status = Column(String)
    