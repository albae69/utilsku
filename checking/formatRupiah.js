export const formatRupiah = rp => {
    return `Rp.${rp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')},-`;
};
