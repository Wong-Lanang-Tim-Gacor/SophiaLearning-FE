export const initialState = {
    classrooms: null,
    active: false,
    modal: null,
    classroomCode: '',
    className: '',
    description: ''
};
const classroomsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLASSROOMS':
            return { ...state, classrooms: action.payload };
        case 'EDIT_CLASSROOM': // Aksi baru untuk mengedit kelas
            return {
                ...state,
                classrooms: state.classrooms.map((classroom) =>
                    classroom.id === action.payload.id
                        ? { ...classroom, ...action.payload } // Update classroom yang sesuai
                        : classroom
                )
            };
        case 'TOGGLE_ACTIVE':
            return { ...state, active: !state.active };
        case 'SET_MODAL':
            return { ...state, modal: action.payload, active: false };
        case 'SET_CLASSROOM_CODE':
            return { ...state, classroomCode: action.payload };
        case 'SET_CLASS_NAME':
            return { ...state, className: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'ADD_CLASSROOM':
            return { ...state, classrooms: [...state.classrooms, action.payload] };
        default:
            return state;
    }
};


export default classroomsReducer