import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/textinputformcontainer";

function StartGame() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0a0a0f",
                color: "#E8C547",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "50px",
                fontFamily: "'Press Start 2P', monospace",
            }}
        >
            <svg width="150" height="150" viewBox="0 0 140 130" style={{ marginBottom: "15px" }}>
                <line x1="20" y1="125" x2="120" y2="125" stroke="#5F5E5A" strokeWidth="3" />
                <line x1="40" y1="125" x2="40" y2="10" stroke="#5F5E5A" strokeWidth="3" />
                <line x1="40" y1="10" x2="80" y2="10" stroke="#5F5E5A" strokeWidth="3" />
                <line x1="80" y1="10" x2="80" y2="22" stroke="#B4B2A9" strokeWidth="2" />

                <g
                    style={{
                        animation: "sway 2s ease-in-out infinite",
                        transformOrigin: "80px 22px",
                        transformBox: "fill-box",
                    }}
                >
                    <circle cx="80" cy="32" r="9" fill="none" stroke="#E8C547" strokeWidth="2" />
                    <line x1="80" y1="41" x2="80" y2="68" stroke="#E8C547" strokeWidth="2" />
                    <line x1="80" y1="50" x2="66" y2="60" stroke="#E8C547" strokeWidth="2" />
                    <line x1="80" y1="50" x2="94" y2="60" stroke="#E8C547" strokeWidth="2" />
                    <line x1="80" y1="68" x2="68" y2="84" stroke="#E8C547" strokeWidth="2" />
                    <line x1="80" y1="68" x2="92" y2="84" stroke="#E8C547" strokeWidth="2" />
                </g>
            </svg>
            <h1
                style={{
                    fontFamily: "'Creepster', cursive",
                    fontSize: "52px",
                    letterSpacing: "4px",
                    marginBottom: "40px",
                }}
            >
                PLAY GAME
            </h1>
            <p style={{ color: "#aaa", marginBottom: "30px" }}>
                Multiplayer Setup
            </p>

            <div
                style={{
                    background: "#1a1a24",
                    padding: "30px",
                    borderRadius: "15px",
                    border: "2px solid #E8C547",
                    width: "700px",
                    maxWidth: "90%",
                }}
            >
                <TextInputFormContainer />
            </div>

            <Link to="/" style={{ marginTop: "25px" }}>
                <button
                    style={{
                        background: "#E8C547",
                        color: "#000",
                        padding: "12px 20px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Home
                </button>
            </Link>
            <style>{`
        
        @keyframes sway {
          0%,100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>
        </div>
    );
}

export default StartGame;