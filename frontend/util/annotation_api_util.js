export const createAnnotation = annotation => (
    $.ajax({
        method: 'POST',
        url: '/api/annotations',
        data: { annotation }
    })
);

export const fetchAnnotation = id => (
    $.ajax({
        method: 'GET',
        url: `api/annotations/${id}`
    })
);

export const fetchAnnotations = () => (
    $.ajax({
        method: 'GET',
        url: `api/annotations/`
    })
);


export const destroyAnnotation = (id) => (
    $.ajax({
        url: `/api/annotations/${id}`,
        method: 'DELETE',
    })
)

export const updateAnnotation = (annotation) => (
    $.ajax({
        url: `/api/annotations/${annotation.id}`,
        method: 'PATCH',
        data: { annotation }
    })
)

