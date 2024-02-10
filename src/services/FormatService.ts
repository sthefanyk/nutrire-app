export function formatNumberForReal(numero: number): string {
    const formatoReal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatoReal.format(numero);
}