import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Button from "./Button";
import Paragraphe from "./Paragraphe";
import Nav from "./Nav";
import Checkbox from "./Checkbox";

const Content = () => {
  const [marie, setMarie] = useState("");
  const [femme, setFemme] = useState("");
  const [relation, setRelation] = useState("");
  const [role, setRole] = useState("");
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedCitations, setSelectedCitations] = useState([]);
  const [anecdotes, setAnecdotes] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    event.preventDefault();
    setShowResult(true);
    setLoading(true);
    fetch("https://just-look-back.vercel.app/content/mariage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        marie,
        femme,
        role,
        relation,
        selectedStyles,
        selectedCitations,
        anecdotes,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGeneratedText(data);
        setMarie("");
        setFemme("");
        setRelation("");
        setRole("");
        setSelectedStyles("");
        setSelectedCitations("");
        setAnecdotes("");
        setLoading(false);
      });
  };

  const roles = [
    "Qui êtes-vous ?",
    "le marié",
    "la mariée",
    "le père",
    "la mère",
    "le fils",
    "la fille",
    "le frère",
    "la soeur",
    "le grand-père",
    "la grand-mère",
    "l'oncle",
    "la tante",
    "le cousin",
    "la cousine",
    "le neveu",
    "la nièce",
    "le copain",
    "la copine",
    "l'ami",
    "l'amie",
    "le collègue",
  ];

  const optionsRôle = roles.map((role, i) => (
    <option key={i} value={role}>
      {role}
    </option>
  ));

  const styles = [
    "Amusant",
    "Affectueux",
    "Bizarre",
    "Drôle",
    "Éloquent",
    "Émouvant",
    "Énergique",
    "Engageant",
    "Formel",
    "Gentil",
    "Humoristique",
    "Inspirant",
    "Joyeux",
    "Nostalgique",
    "Poétique",
    "Poignant",
    "Sarcastique",
    "Sérieux",
    "Sincère",
    "Sombre",
    "Souriant",
    "Spirituel",
    "Touchant",
    "Triste",
  ];

  const newStyle = (style) => {
    setSelectedStyles([...selectedStyles, style]);
  };
  const deleteStyle = (style) => {
    setSelectedStyles(selectedStyles.filter((s) => s !== style));
  };

  const citations = [
    "Citations célèbres sur l'amour et le mariage.",
    "Citations inspirantes spirituels ou religieux.",
    "Citations humoristiques et drôle ",
    "Proverbes ou dictons populaires sur le mariage.",
    "Citations de chansons ou de poèmes",
    "Citations de films ou de livres célèbres",
  ];

  const newCitation = (citation) => {
    setSelectedCitations([...selectedCitations, citation]);
  };

  const deleteCitation = (citation) => {
    setSelectedCitations(selectedCitations.filter((c) => c !== citation));
  };

  return (
    <>
      <Nav title={"Wedding Speech"} />
      <section className="bg-gray-900 flex flex-col min-h-screen items-center mt-24">
        <div className="py-8 px-4 max-w-2xl lg:py-16 w-full ">
          {/* <h2 className=" mb-5 text-2xl font-bold text-white ">Mariage</h2> */}
          <p className="font-light sm:text-xl text-gray-400 mb-5">
            Vous devez prendre la parole pour un mariage ? Vous êtes au bon
            endroit. Remplissez les champs et laissez-vous guider ...
          </p>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <Label htmlFor="marie">Marié(e) - 1</Label>
                <Input
                  type="text"
                  name="marie"
                  id="marie"
                  placeholder="Nom"
                  required=""
                  onChange={(e) => setMarie(e.target.value)}
                  value={marie}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="femme">Marié(e) - 2</Label>
                <Input
                  type="text"
                  name="femme"
                  id="femme"
                  placeholder="Nom"
                  required=""
                  onChange={(e) => setFemme(e.target.value)}
                  value={femme}
                />
              </div>
              <div>
                <Label htmlFor="Rôle">Oratrice / Orateur</Label>
                <Select
                  id="Rôle"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                >
                  {optionsRôle}
                </Select>
              </div>
              <div>
                <Label htmlFor="relation">
                  Vous êtes {role ? role : "..."} de{" "}
                  {relation ? relation : "..."}
                </Label>
                <Select
                  id="relation"
                  onChange={(e) => setRelation(e.target.value)}
                  value={relation}
                >
                  <option value="">-</option>
                  <option value={marie}>{marie}</option>
                  <option value={femme}>{femme}</option>
                </Select>
              </div>

              <div>
                <Label htmlFor="Style">Style du discours</Label>
                <Checkbox
                  items={styles}
                  newItem={newStyle}
                  select={selectedStyles}
                  deleteItem={deleteStyle}
                  dropDownToggle={"dropdown-toggle-1"}
                />
              </div>
              <div>
                <Label htmlFor="Citation">Citation ou proverbe</Label>
                <Checkbox
                  items={citations}
                  newItem={newCitation}
                  select={selectedCitations}
                  deleteItem={deleteCitation}
                  dropDownToggle={"dropdown-toggle-2"}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="anecdotes">Personnalisez votre discours</Label>
                <Textarea
                  id="anecdotes"
                  rows="2"
                  placeholder="Anecdotes sur les marié(e)s ? Réflexions sur le sens du mariage et la force de l'amour ... (optionnel) "
                  onChange={(e) => setAnecdotes(e.target.value)}
                  value={anecdotes}
                ></Textarea>
              </div>
            </div>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Générez votre discours !
            </Button>
          </form>

          {showResult ? (
            loading ? (
              <Paragraphe chargement>Chargement en cours...</Paragraphe>
            ) : (
              <Paragraphe>
                <Markdown option={{ html: true }}>{generatedText}</Markdown>
              </Paragraphe>
            )
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Content;
