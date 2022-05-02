export async function getServices() {
    try {
        const response = await fetch(`https://app-service-ffptpmrzya-el.a.run.app/v1/services/listAll`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
