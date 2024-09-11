import React, { useState } from 'react';

const EducationTable = ({ onUpdateEducation }) => {
    const [education, setEducation] = useState([
      { school: '', major: '', period: '', type: '', degree: '' },
    ]);
  
    const handleChange = (index, field, value) => {
      const updatedEducation = [...education];
      updatedEducation[index][field] = value;
      setEducation(updatedEducation);
    };
  
    const addEducation = () => {
      setEducation([...education, { school: '', major: '', period: '', type: '', degree: '' }]);
    };
  
    const handleBlur = () => {
      onUpdateEducation(education);
    };
  
    return (
      <div>
        <table className="custom-table">
          <thead>
            <tr>
                  <th>Tên trường</th>
                  <th>Chuyên ngành đào tạo, bồi dưỡng</th>
                  <th>Từ tháng, năm - đến tháng, năm</th>
                  <th>Hình thức đào tạo</th>
                  <th>Văn bằng, chứng chỉ, trình độ gì</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => handleChange(index, 'school', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={edu.major}
                    onChange={(e) => handleChange(index, 'major', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={edu.period}
                    onChange={(e) => handleChange(index, 'period', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={edu.type}
                    onChange={(e) => handleChange(index, 'type', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleChange(index, 'degree', e.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <button type="button" onClick={addEducation}>Thêm hàng</button>
      </div>
    );
  };
  export default EducationTable;