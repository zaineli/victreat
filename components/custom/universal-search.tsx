import { cancerTypes, mutations, treatments } from "@/app/discover/data";
import Fuse from 'fuse.js';

export function queryData(s: string) {
    const data = [];
    data.push(
        cancerTypes.map((cancer, i) => ({term: cancer.name.toLowerCase() + "  " + cancer.organ.toLowerCase(), i, type: "cancer"}))
    )
    data.push(
        mutations.map((mutation, i) => ({term: mutation.name.toLowerCase(), i, type: "mutation"}))
    )
    data.push(
        treatments.map((treatment, i) => ({term: treatment.name.toLowerCase(), i, type: "treatment"}))
    )
    console.log(data.flat());
    const fuse = new Fuse(data.flat(), {
        keys: ["term"],
        includeScore: true,
        threshold: 0.2,
    });

    const result = fuse.search(s).map((r) => {
        const item = r.item;
        return {
            ...item,
            score: r.score,
        };
    }
    ).sort((a, b) => a.score - b.score).slice(0, 6);
    const items = result.map((r) => {
        if (r.type === "cancer") {
            return {item: cancerTypes[r.i], type: "cancer"};
        }
        if (r.type === "mutation") {
            return {item: mutations[r.i], type: "mutation"};
        }
        if (r.type === "treatment") {
            return {item: treatments[r.i], type: "treatment"};
        }
    });
    console.log(items)
    return items;
}