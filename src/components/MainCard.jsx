import { Link } from 'react-router-dom';
import BestTime from './BestTime';
import '../styles/Wilhan_project.module.css';


export default function MainCard({ dest }) {
    return (
        
        <div className="col-md-4">
            <div className="card h-100">
                <img src={dest.image} className="card-img-top" alt={dest.name} />
                <div className="card-body text-center">
                    <h5 className="text-danger fw-bold">{dest.name}</h5>
                        <BestTime
                            season={dest.season}
                            weather={dest.weather}
                            peakMonths={dest.peakMonths}
                            lowMonths={dest.lowMonths}
                        />
                    <div className="d-flex justify-content-center gap-2 mt-3">
                        <Link to={dest.to} className="btn btn-danger">View Tour</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}