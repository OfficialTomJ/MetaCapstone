import React, { useState } from "react";

function Bookings(props) {

    const [formDate, setFormDate] = useState("2023/1/1");
    const [formTime, setFormTime] = useState("17:00");
    const [formGuests, setFormGuests] = useState(4);
    const [formOccasion, setFormOccasion] = useState("Birthday");

    let allData = {
        date: formDate,
        time: formTime,
        guests: formGuests,
        occasion: formOccasion
    }

    const handleChange = event => {
        let ID = event.target.id;
        let val = event.target.value;
        //Check which field was updated
        if (ID === "res-date") {


            let date = new Date(val);

            //Update times in field
            props.dispatch(date);

            // Get year, month, and day part from the date
            var year = date.toLocaleString("default", { year: "numeric" });
            var month = date.toLocaleString("default", { month: "2-digit" });
            var day = date.toLocaleString("default", { day: "2-digit" });

            // Generate yyyy-mm-dd date string
            var formattedDate = year + "-" + month + "-" + day;

            setFormDate(formattedDate);
        } else if (ID === "res-time") {
            setFormTime(val);

        } else if (ID === "guests") {
            setFormGuests(val);

        } else if (ID === "occasion") {
            setFormOccasion(val);
        }
    };

    function submit(event) {
        event.preventDefault();
        props.submitForm(allData);
    }

    return(
    <main>
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleChange} value={ formDate }/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={handleChange} value={ formTime }>
                {props.availableTimes.map((time) => (
                    <option>{ time }</option>
                ))

                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} value={ formGuests }/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleChange} value={ formOccasion }>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onClick={ submit }/>
         </form>
    </main>
    );
}

export default Bookings;