import React, { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th"; // the locale you want
registerLocale("th", th); // register it with the name you want
import 'react-datepicker/dist/react-datepicker.css';
function Date_Picker({ onChange }) {
    const [startDate, setStartDate] = useState(new Date());
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1989 }, (_, index) => 1990 + index);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <DatePicker
            className='form-control form-control-solid w-full '
            style={{ fontFamily: 'Kanit, sans-serif' }}
            locale="th"
            dateFormat="dd/MM/yyyy"
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div class="h-screen flex flex-col justify-left sm:flex-row">
                    <div class="sm:w-1_3 sm:pr-3">
                        <div
                            style={{
                                margin: 10,
                                display: "flex",
                                justifyContent: "center",
                                fontFamily: 'Kanit, sans-serif'

                            }}
                        >
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                            </button>
                            <select
                                value={date.getFullYear()}
                                onChange={({ target: { value } }) => changeYear(value)}
                            >
                                {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={months[date.getMonth()]}
                                onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                }
                            >
                                {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            selected={startDate}
            onChange={(date) => {
                setStartDate(date); // เซ็ตค่า state ก่อน
                onChange(date); // เรียกใช้ฟังก์ชันที่ถูกส่งเข้ามาเพื่อให้ค่า date ไปยัง component ต้นทาง
            }}
        />
    );
}

export default Date_Picker;
