export interface Taxon {
  id: number;
  name: string;
  preferred_common_name?: string;
  default_photo?: {
    medium_url: string;
    square_url: string;
  };
  wikipedia_url?: string;
  observations_count: number;
}

const PLACE_ID = 6931; // República Dominicana

export async function fetchSpeciesByCategory(category: string, perPage = 6): Promise<Taxon[]> {
  let iconicTaxa = "";
  
  switch (category.toLowerCase()) {
    case "mamíferos":
      iconicTaxa = "Mammalia";
      break;
    case "aves":
      iconicTaxa = "Aves";
      break;
    case "reptiles":
      iconicTaxa = "Reptilia";
      break;
    case "marinos":
      iconicTaxa = "Actinopterygii,Mollusca";
      break;
    default:
      iconicTaxa = "";
  }

  try {
    const response = await fetch(
      `https://api.inaturalist.org/v1/taxa?place_id=${PLACE_ID}&iconic_taxa=${iconicTaxa}&rank=species&per_page=${perPage}&order_by=observations_count&order=desc`
    );
    const data = await response.json();
    return data.results.map((item: any) => ({
      id: item.id,
      name: item.name,
      preferred_common_name: item.preferred_common_name,
      default_photo: item.default_photo,
      wikipedia_url: item.wikipedia_url,
      observations_count: item.observations_count,
    }));
  } catch (error) {
    console.error("Error fetching iNaturalist data:", error);
    return [];
  }
}
