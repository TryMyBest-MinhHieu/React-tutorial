import React, { useState } from 'react';

const WorkExperienceTable = ({ onUpdateWorkExperiences }) => {
  const [workExperiences, setWorkExperiences] = useState([
    { period: '', position: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setWorkExperiences([...workExperiences, { period: '', position: '' }]);
  };

  const handleBlur = () => {
    onUpdateWorkExperiences(workExperiences);
  };

  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Từ tháng, năm - đến tháng, năm</th>
            <th>Chức danh, chức vụ, đơn vị công tác</th>
          </tr>
        </thead>
        <tbody>
          {workExperiences.map((experience, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={experience.period}
                  onChange={(e) => handleChange(index, 'period', e.target.value)}
                  onBlur={handleBlur} // Gọi handleBlur khi input mất focus
                />
              </td>
              <td>
                <textarea
                  name="position"
                  value={experience.position}
                  onChange={(e) => handleChange(index, 'position', e.target.value)}
                  onBlur={handleBlur} // Gọi handleBlur khi textarea mất focus
                ></textarea>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={addExperience}>Thêm công tác</button> {/* Thêm type="button" để ngăn tự động submit */}
    </div>
  );
};

export default WorkExperienceTable;
