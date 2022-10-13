
export default function Services() {

    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <h1>Here are the services we provide:</h1>

            <div className="flex items-center justify-center gap-8  flex-wrap w-full">
                <div className="card">
                    <h2>Water heater installation and repair</h2>
                </div>
                <div className="card">
                    <h2>Water line services</h2>
                </div>
                <div className="card">
                    <h2>Sewer services</h2>
                </div>
                <div className="card">
                    <h2>Leak detection</h2>
                </div>
            </div>
        </div>
    );
}